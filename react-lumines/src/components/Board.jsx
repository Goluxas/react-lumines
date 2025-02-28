import { useState } from "react";
import { ToggleablePane } from "./Tile";

import { nanoid } from "nanoid";
import { Board as BoardHandler, cycleColor } from "../boardHandler";

// const initialBoardState = `........
//                            ........
//                            ........
//                            ........
//                            ww......
//                            wcw.....`;

let initialBoardState = BoardHandler.generateBlankBoard()
  .dropTile("wcww", 0)
  .dropTile("cwww", 2)
  .dropTile("wwww", 3);

export default function Board() {
  const [board, setBoard] = useState(initialBoardState.asArray());

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
