import React, { useState } from "react";
import {
  GamesQuery_games,
  GamesQuery_games_gameRounds
} from "./queries/__generated__/GamesQuery";
import { WhosTurn, GameRoundStatus } from "../__generated__/globalTypes";
import GameRound from "./GameRound";

interface IProps {
  username: string;
  activeGame: GamesQuery_games | undefined;
}

const onPlayTurnClick = (
  game: GamesQuery_games,
  setActiveRound: (newActiveRound: GamesQuery_games_gameRounds) => void
) => {
  const nextRound = game.gameRounds.find(
    round => round.status === GameRoundStatus.ACTIVE
  );
  if (nextRound) {
    setActiveRound(nextRound);
  } else {
    console.error("No next round found");
  }
};

const GameControls: React.FunctionComponent<IProps> = props => {
  const [activeRound, setActiveRound] = useState<
    GamesQuery_games_gameRounds | undefined
  >(undefined);

  const game = props.activeGame;
  if (game) {
    const player1Name = game.player1.name;
    const player2Name = game.player2.name;

    const myPlayerNumber =
      player1Name === props.username ? WhosTurn.PLAYER1 : WhosTurn.PLAYER2;

    const whosTurn = game.whosTurn;
    const isMyTurn = whosTurn === myPlayerNumber;

    if (isMyTurn) {
      return (
        <>
          <div>
            Game: {player1Name} VS {player2Name}
          </div>
          <button
            onClick={() => {
              onPlayTurnClick(game, setActiveRound);
            }}
          >
            Play your turn
          </button>

          <div>{activeRound && <GameRound activeRound={activeRound} />}</div>
        </>
      );
    } else {
      return (
        <>
          <div>
            Game: {player1Name} VS {player2Name}
          </div>
          <button>Not your turn</button>
        </>
      );
    }
  } else {
    return <div>No game selected</div>;
  }
};
export default GameControls;
