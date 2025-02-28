import { nanoid } from "nanoid";

const [BOARD_HEIGHT, BOARD_WIDTH] = [10, 16];
const BOARD_SIZE = BOARD_HEIGHT * BOARD_WIDTH;

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

export function codeToColor(colorCode) {
  if (colorCode === "w") return "white";
  else if (colorCode === "c") return "color";
  else return "off";
}

export function cycleColor(color) {
  if (color === "off") return "white";
  else if (color === "white") return "color";
  else return "off";
}

export class Board {
  constructor(boardArray) {
    this.board = boardArray.map((pane) => ({ ...pane }));
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

  getPane(x, y) {
    /*
     Top Left of board is (0,0), Bottom Right is (boardwidth-1, boardheight-1)
     x = column, y = row
    */
    return this.board[x + y * BOARD_WIDTH];
  }

  setPane(x, y, colorCode) {
    /*
     Top Left of board is (0,0), Bottom Right is (boardwidth-1, boardheight-1)
     colorCode = w|c|.
    */
    let pane = this.getPane(x, y);
    pane.color = codeToColor(colorCode);
  }

  firstLit(column) {
    for (let row = 0; row < BOARD_HEIGHT; row++) {
      if (this.getPane(column, row).color !== "off") {
        return row;
      }
    }
    return BOARD_HEIGHT; // Nothing lit, return boardHeight
  }

  dropTile(tilePanes, column) {
    /* Drop the tile described by tilePanes in the zero-indexed column.
     *
     * Both columns of the tile will fall until they meet a lit panel in the board.
     */
    const colA_r = this.firstLit(column) - 1;
    const colB_r = this.firstLit(column + 1) - 1;

    this.setPane(column, colA_r - 1, tilePanes[0]);
    this.setPane(column, colA_r, tilePanes[2]);
    this.setPane(column + 1, colB_r - 1, tilePanes[1]);
    this.setPane(column + 1, colB_r, tilePanes[3]);

    return this;
  }
}
