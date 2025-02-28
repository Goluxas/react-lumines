import { useState } from "react";

export function TilePane({ color }) {
  return <div className={`pane ${color}-pane`}></div>;
}

export function ToggleablePane({ id, color, handleClick }) {
  return (
    <div
      className={`pane ${color}-pane`}
      onClick={() => {
        handleClick(id);
      }}
    ></div>
  );
}

export default function Tile({ id, arrangement, handleClick }) {
  /*
  arrangement = a four-character string that defines the configuration of a 2x2 tile
    using w, c, or . (dot).
      w = white
      c = color
      . = off

    "wwwc" => ww
              wc
  */

  const colors = arrangement.split("").map((char) => {
    if (char === "w") return "white";
    if (char === "c") return "color";
    return "off";
  });

  return (
    <section className="tile" onClick={() => handleClick(id)}>
      <TilePane color={colors[0]} />
      <TilePane color={colors[1]} />
      <TilePane color={colors[2]} />
      <TilePane color={colors[3]} />
    </section>
  );
}
