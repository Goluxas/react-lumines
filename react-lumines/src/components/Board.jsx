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

export default function Board({ selectedTile }) {
  const [board, setBoard] = useState(initialBoardState.asArray());

  function togglePane(id) {
    setBoard((prevBoard) =>
      prevBoard.map((pane) => ({
        ...pane,
        color: pane.id === id ? cycleColor(pane.color) : pane.color,
      }))
    );
  }

  function drop(arrangement, position) {
    setBoard((prevBoard) => {
      console.log(`Dropping ${arrangement} at ${position}`);
      const newBoard = new BoardHandler(prevBoard).dropTile(
        arrangement,
        position
      );

      // This succeeds but doesn't re-render the grid until I click
      // to toggle another pane. Why?
      return newBoard.asArray().map((pane) => ({ ...pane }));
    });
  }

  const dropButtons = new Array(16).fill(0).map((_, idx) => (
    <button key={`drop-button-${idx}`} onClick={() => drop(selectedTile, idx)}>
      ⬇️
    </button>
  ));

  const boardPanes = board.map((pane) => (
    <ToggleablePane
      key={pane.id}
      id={pane.id}
      handleClick={togglePane}
      color={pane.color}
    />
  ));

  return (
    <section>
      {selectedTile !== undefined && (
        <section className="drop-buttons">{dropButtons}</section>
      )}
      <section className="play-board">{boardPanes}</section>
    </section>
  );
}
