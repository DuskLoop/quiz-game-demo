import React from "react";
import { Query } from "react-apollo";
import { loader } from "graphql.macro";
import {
  GamesQuery,
  GamesQuery_games
} from "./queries/__generated__/GamesQuery";

const query = loader("./queries/gamesQuery.graphql");

interface IProps {
  setActiveGame: (newActiveGame: GamesQuery_games) => void;
}

const GameSelect: React.FunctionComponent<IProps> = props => {
  return (
    <Query<GamesQuery> query={query}>
      {({ loading, data, error }) => {
        if (data && data.games) {
          return data.games.map(game => (
            <button
              key={game.id}
              onClick={() => {
                props.setActiveGame(game);
              }}
            >
              {game.id}
            </button>
          ));
        } else {
          return null;
        }
      }}
    </Query>
  );
};

export default GameSelect;
