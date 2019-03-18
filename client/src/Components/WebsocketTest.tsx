import React from "react";
import { GamesQuery_games } from "./queries/__generated__/GamesQuery";

interface IProps {
  username: string;
  activeGame: GamesQuery_games | undefined;
}

const WebsocketTest: React.FunctionComponent<IProps> = props => {
  return (
    <>
      <button
        onClick={() => {
          if (!props.activeGame) {
            return;
          }

          const ws = new WebSocket(
            `ws://localhost:40510/?username=${props.username}&gameId=${
              props.activeGame.id
            }`
          );

          ws.onmessage = data => {
            console.log(data);
          };

          ws.onopen = () => {
            ws.send("Hej från client!");
          };
        }}
      >
        Connect
      </button>
    </>
  );
};
export default WebsocketTest;
