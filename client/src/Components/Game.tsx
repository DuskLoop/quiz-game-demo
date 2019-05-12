import React, { useState, useRef } from "react";
import useUsername from "./hooks/useUsername";
import UserInfo from "./UserInfo";
import { Query, Mutation, MutationFn, Subscription } from "react-apollo";
import { loader } from "graphql.macro";
import { Games } from "./__generated__/Games";
import { GraphQLError } from "graphql";
import {
  submitAnswer,
  submitAnswerVariables
} from "./Mutations/__generated__/submitAnswer";
import {
  resetQuestion,
  resetQuestionVariables
} from "./Mutations/__generated__/resetQuestion";
import {
  startQuestion,
  startQuestionVariables
} from "./Mutations/__generated__/startQuestion";
import {
  roundUpdates,
  roundUpdatesVariables
} from "./Subscriptions/__generated__/roundUpdates";
import {
  songQuestion,
  songQuestion_songQuestion as Question,
  songQuestionVariables
} from "./Queries/__generated__/songQuestion";
import { useTimer } from "./hooks/useTimer";
import { useEffect } from "react";
import { Button } from "./Button/Button";

const gamesQuery = loader("./Games.graphql");
const questionQuery = loader("./Queries/songQuestion.graphql");
const startQuestionMutation = loader("./Mutations/StartQuestion.graphql");
const submitAnswerMutation = loader("./Mutations/SubmitAnswer.graphql");
const resetQuestionMutation = loader("./Mutations/ResetQuestion.graphql");
const roundUpdatesSubscription = loader("./Subscriptions/roundUpdates.graphql");

interface IProps {
  submitAnswer: MutationFn<submitAnswer, submitAnswerVariables>;
  resetQuestion: MutationFn<resetQuestion, resetQuestionVariables>;
  startQuestion: MutationFn<startQuestion, startQuestionVariables>;
}

const Game: React.FunctionComponent<IProps> = props => {
  const username = useUsername();
  const [selectedQuestionId, setSelectedQuestionId] = useState<
    string | undefined
  >(undefined);
  const timer = useTimer(1000);

  const audioEl = useRef<HTMLAudioElement>(null);

  return (
    <div>
      <audio
        src="http://localhost:4000/static/audio/BLACKPINK.mp3"
        ref={audioEl}
      />
      <button
        onClick={() => {
          if (audioEl.current) {
            audioEl.current.play();
          }
        }}
      >
        Play
      </button>
      <button
        onClick={() => {
          if (audioEl.current) {
            audioEl.current.pause();
          }
        }}
      >
        Pause
      </button>
      <UserInfo username={username} />
      <Query<Games> query={gamesQuery}>
        {({ data, loading, error }) => {
          if (error) {
            return "Error";
          } else if (loading) {
            return "Loading";
          } else if (!data) {
            return "No data";
          } else {
            return data.games.map(game => (
              <div key={game.id}>
                <h4>{`${game.player1.name} VS ${game.player2.name}`}</h4>
                {game.gameRounds.map((round, index) => (
                  <div key={round.id}>
                    <p>Round {index + 1}</p>
                    <Subscription<roundUpdates, roundUpdatesVariables>
                      subscription={roundUpdatesSubscription}
                      variables={{ roundId: round.id }}
                      onSubscriptionData={({ subscriptionData }) => {
                        if (
                          subscriptionData.data &&
                          subscriptionData.data.roundUpdates.answers[0]
                            .startTime &&
                          subscriptionData.data.roundUpdates.answers[0]
                            .guessedSong == null
                        ) {
                          // Started answering
                          timer.start();
                        }
                      }}
                    >
                      {({ loading, error, data }) => {
                        if (error) {
                          return "Error";
                        } else if (loading) {
                          return <p>Loading...</p>;
                        } else if (!data) {
                          return "No data";
                        } else {
                          return data.roundUpdates.id;
                        }
                      }}
                    </Subscription>
                    <p>{`Time: ${timer.timeMs}`}</p>
                    <button
                      onClick={() => {
                        timer.start();
                      }}
                    >
                      Start
                    </button>
                    <button
                      onClick={() => {
                        timer.pause();
                      }}
                    >
                      Pause
                    </button>
                    <button
                      onClick={() => {
                        timer.stop();
                      }}
                    >
                      Stop
                    </button>
                    {round.songQuestions.map((question, questionIndex) => (
                      <div key={question.id}>
                        <button
                          key={question.id}
                          onClick={() => {
                            setSelectedQuestionId(question.id);
                          }}
                        >
                          Question {questionIndex + 1}
                        </button>
                        {selectedQuestionId && (
                          <Query<songQuestion, songQuestionVariables>
                            query={questionQuery}
                            variables={{ questionId: selectedQuestionId }}
                          >
                            {({ loading, data, error }) => {
                              if (error) {
                                return "Error";
                              } else if (loading) {
                                return <p>Loading...</p>;
                              } else if (!data || !data.songQuestion) {
                                return "No data";
                              } else {
                                return (
                                  <div>
                                    <p>Question: {data.songQuestion.id}</p>
                                    <button
                                      onClick={() => {
                                        props.startQuestion({
                                          variables: {
                                            questionId: data.songQuestion.id
                                          }
                                        });
                                        timer.start();
                                      }}
                                    >
                                      Start
                                    </button>
                                    <button
                                      onClick={() => {
                                        props.resetQuestion({
                                          variables: {
                                            questionId: data.songQuestion.id
                                          }
                                        });
                                      }}
                                    >
                                      Reset
                                    </button>

                                    <div>
                                      <Button
                                        onClick={() => {
                                          props
                                            .submitAnswer({
                                              variables: {
                                                questionId:
                                                  data.songQuestion.id,
                                                songId:
                                                  data.songQuestion.song.id,
                                                time: timer.timeMs
                                              }
                                            })
                                            .then(res => {
                                              if (res && res.data) {
                                                console.log(
                                                  "Timer: ",
                                                  timer.timeMs,
                                                  "Time: ",
                                                  res.data.submitAnswer
                                                    .answers[0].time
                                                );
                                              }
                                            });

                                          timer.pause();
                                        }}
                                      >
                                        {data.songQuestion.song.name}
                                      </Button>
                                      {data.songQuestion.songAlternatives.map(
                                        song => (
                                          <button
                                            key={song.id}
                                            onClick={() => {
                                              props.submitAnswer({
                                                variables: {
                                                  questionId:
                                                    data.songQuestion.id,
                                                  songId: song.id,
                                                  time: timer.timeMs
                                                }
                                              });
                                              timer.pause();
                                            }}
                                          >
                                            {song.name}
                                          </button>
                                        )
                                      )}
                                    </div>
                                    <pre>
                                      <code>
                                        {JSON.stringify(
                                          data.songQuestion,
                                          null,
                                          4
                                        )}
                                      </code>
                                    </pre>
                                  </div>
                                );
                              }
                            }}
                          </Query>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ));
          }
        }}
      </Query>
    </div>
  );
};

const EnhancedGame: React.FunctionComponent<{}> = () => (
  <Mutation<submitAnswer, submitAnswerVariables>
    mutation={submitAnswerMutation}
  >
    {submitAnswer => (
      <Mutation<resetQuestion, resetQuestionVariables>
        mutation={resetQuestionMutation}
      >
        {resetQuestion => (
          <Mutation<startQuestion, startQuestionVariables>
            mutation={startQuestionMutation}
          >
            {startQuestion => (
              <Game
                submitAnswer={submitAnswer}
                resetQuestion={resetQuestion}
                startQuestion={startQuestion}
              />
            )}
          </Mutation>
        )}
      </Mutation>
    )}
  </Mutation>
);

export default EnhancedGame;
