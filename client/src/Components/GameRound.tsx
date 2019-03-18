import React from "react";
import { GamesQuery_games_gameRounds } from "./queries/__generated__/GamesQuery";
import { Query } from "react-apollo";
import { loader } from "graphql.macro";
import {
  SongQuery,
  SongQueryVariables
} from "./queries/__generated__/SongQuery";

const query = loader("./queries/songQuery.graphql");

interface IProps {
  activeRound: GamesQuery_games_gameRounds;
}

const GameRound: React.FunctionComponent<IProps> = props => {
  const question = props.activeRound.songQuestions.find(
    question => question.player1Answer === null
  );

  if (!question) {
    return null;
  }

  return (
    <Query<SongQuery, SongQueryVariables>
      query={query}
      variables={{ id: question.song.id }}
    >
      {({ data }) => {
        if (!data || !data.song) {
          return null;
        }

        const fakeAnswers = [
          { id: "1", text: "Fake1" },
          { id: "2", text: "Fake2" }
        ];

        const answers = [
          ...fakeAnswers,
          { id: question.song.id, text: data.song.name }
        ];
        return answers.map(answer => (
          <button key={answer.id}>{answer.text}</button>
        ));
      }}
    </Query>
  );
};
export default GameRound;
