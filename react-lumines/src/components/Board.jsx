import { useState } from "react";
import { ToggleablePane } from "./Tile";

function stringToBoardState(strState) {
  return strState
    .replace(/\s+/g, "") // \s is any whitespace character
    .split("")
    .map((char) => {
      if (char === "w") return "white";
      if (char === "c") return "color";
      return "off";
    });
}

const initialBoardState = `........
                           ........
                           ........
                           ........
                           ww......
                           wcw.....`;

export default function Board() {
  const [board, setBoard] = useState(stringToBoardState(initialBoardState));

  const boardPanes = board.map((paneColor) => (
    <ToggleablePane key={Math.random()} color={paneColor} />
  ));

  return <section className="play-board">{boardPanes}</section>;
}
