import React from "react";
import {
  gameRound_gameRound,
  gameRound
} from "./queries/__generated__/gameRound";
import { Query } from "react-apollo";
import { loader } from "graphql.macro";

const query = loader("./queries/gameRoundQuery.graphql");

interface IProps {
  gameRound?: gameRound_gameRound;
  playRound: (gameRound: gameRound_gameRound) => void;
}

const GameRoundSelect: React.FunctionComponent<IProps> = props => {
  return (
    <Query<gameRound> query={query}>
      {({ loading, data }) => {
        if (loading) {
          return "Loading";
        } else if (data) {
          return (
            <button
              onClick={() => {
                props.playRound(data.gameRound);
              }}
            >
              {data.gameRound.id}
            </button>
          );
        }
      }}
    </Query>
  );
};
export default GameRoundSelect;
