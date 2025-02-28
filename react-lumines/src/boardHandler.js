import { nanoid } from "nanoid";

const BOARD_SIZE = 10 * 16;

export function stringToBoardState(strState) {
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

export function cycleColor(color) {
  if (color === "off") return "white";
  else if (color === "white") return "color";
  else return "off";
}

export class Board {
  constructor(boardArray) {
    this.board = boardArray;
  }

  static generateBlankBoard() {
    return new Board(
      new Array(BOARD_SIZE).fill(0).map((_) => ({
        id: nanoid(),
        color: "off",
      }))
    );
  }

  asArray() {
    return this.board;
  }
}

export function firstLit(board, column) {}

export function dropTile(board, tilePanes, column) {
  /* Drop the tile described by tilePanes in the zero-indexed column.
   *
   * Both columns of the tile will fall until they meet a lit panel in the board.
   */
  firstLit(board, column);
  return board;
}
