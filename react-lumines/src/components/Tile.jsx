import { useState } from "react";

export function Pane({ color: initialColor, key, toggleable }) {
  const [color, setColor] = useState(initialColor);

  // Setting a default here, but not sure this is the best way
  toggleable = toggleable === undefined ? true : toggleable;

  function toggleColor() {
    setColor((prev) => {
      if (prev === "off") {
        return "white";
      } else if (prev === "white") {
        return "color";
      } else {
        return "off";
      }
    });
  }

  return (
    <div
      key={key}
      className={`pane ${color}-pane`}
      onClick={toggleable ? toggleColor : null}
    ></div>
  );
}

export default function Tile({ arrangement, toggleable }) {
  /*
  arrangement = a four-character string that defines the configuration of a 2x2 tile
    using w, c, or . (dot).
      w = white
      c = color
      . = off

    "wwwc" => ww
              wc
  */

  toggleable = toggleable === undefined ? true : toggleable;

  const colors = arrangement.split("").map((char) => {
    if (char === "w") return "white";
    if (char === "c") return "color";
    return "off";
  });

  return (
    <section className="tile">
      <Pane color={colors[0]} key={Math.random()} toggleable={false} />
      <Pane color={colors[1]} key={Math.random()} toggleable={false} />
      <Pane color={colors[2]} key={Math.random()} toggleable={false} />
      <Pane color={colors[3]} key={Math.random()} toggleable={false} />
    </section>
  );
}
