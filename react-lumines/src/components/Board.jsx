import { useState } from "react";
import { ToggleablePane } from "./Tile";

import { nanoid } from "nanoid";

function stringToBoardState(strState) {
  return strState
    .replace(/\s+/g, "") // \s is any whitespace character
    .split("")
    .map((char) => {
      let newColor;
      if (char === "w") newColor = "white";
      else if (char === "c") newColor = "color";
      else newColor = "off";

      return { id: nanoid(), color: newColor };
    });
}

const initialBoardState = `........
                           ........
                           ........
                           ........
                           ww......
                           wcw.....`;

function cycleColor(color) {
  console.log(color);
  if (color === "off") return "white";
  else if (color === "white") return "color";
  else return "off";
}

export default function Board() {
  const [board, setBoard] = useState(stringToBoardState(initialBoardState));

  function togglePane(id) {
    setBoard((prevBoard) =>
      prevBoard.map((pane) => ({
        ...pane,
        color: pane.id === id ? cycleColor(pane.color) : pane.color,
      }))
    );
  }

  const boardPanes = board.map((pane) => (
    <ToggleablePane
      key={pane.id}
      id={pane.id}
      handleClick={togglePane}
      color={pane.color}
    />
  ));

  return <section className="play-board">{boardPanes}</section>;
}
