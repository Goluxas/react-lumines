import { useState } from "react";
import { nanoid } from "nanoid";

import Tile from "./Tile";

const BASIC_TILES = [
  { id: nanoid(), arrangement: "wwww" },
  { id: nanoid(), arrangement: "cccc" },
  { id: nanoid(), arrangement: "wwwc" },
  { id: nanoid(), arrangement: "cccw" },
  { id: nanoid(), arrangement: "wccw" },
  { id: nanoid(), arrangement: "wcwc" },
];

function rotateClockwise(arrangement) {
  return arrangement[2] + arrangement[0] + arrangement[3] + arrangement[1];
}

export default function TileReference({ handleClick }) {
  const [tileColors, setTileColors] = useState(BASIC_TILES);

  function rotate(id) {
    setTileColors((prev) =>
      prev.map((tile) => ({
        /*
        ww               ww    cw    wc
        wc -> rotated -> cw -> ww -> ww
        */
        ...tile,
        arrangement:
          tile.id == id ? rotateClockwise(tile.arrangement) : tile.arrangement,
      }))
    );
  }

  const referenceTiles = tileColors.map((tile) => (
    <section key={tile.id} className="tile-reference-tile">
      <Tile id={tile.id} arrangement={tile.arrangement} handleClick={rotate} />
      <button>Pick</button>
    </section>
  ));

  return (
    <header>
      <section className="tile-reference">{referenceTiles}</section>
    </header>
  );
}
