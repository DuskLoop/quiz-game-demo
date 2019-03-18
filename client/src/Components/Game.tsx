import React, { useState } from "react";
import useUsername from "./hooks/useUsername";
import UserInfo from "./UserInfo";
import GameControls from "./GameControls";
import GameInfo from "./GameInfo";
import GameSelect from "./GameSelect";
import { GamesQuery_games } from "./queries/__generated__/GamesQuery";
import WebsocketTest from "./WebsocketTest";
import GameRoundSelect from "./GameRoundSelect";
import { gameRound_gameRound } from "./queries/__generated__/gameRound";

interface IProps {}

const Game: React.FunctionComponent<IProps> = props => {
  const [activeGame, setActiveGame] = useState<GamesQuery_games | undefined>(
    undefined
  );
  const [activeRound, setActiveRound] = useState<
    gameRound_gameRound | undefined
  >(undefined);
  const username = useUsername();

  const playRound = (round: gameRound_gameRound) => {
    console.log("Start game");
  };

  return (
    <div>
      <UserInfo username={username} />
      {/* <GameSelect setActiveGame={setActiveGame} />
      <GameControls username={username} activeGame={activeGame} />
      <GameInfo username={username} />
      <WebsocketTest username={username} activeGame={activeGame} /> */}
      <GameRoundSelect gameRound={activeRound} playRound={playRound} />
    </div>
  );
};
export default Game;
