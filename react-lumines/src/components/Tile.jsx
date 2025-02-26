import { useState } from "react";

export function Pane({ color: initialColor, keyProp, toggleable }) {
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
      key={keyProp}
      className={`pane ${color}-pane`}
      onClick={toggleable ? toggleColor : null}
    ></div>
  );
}

export default function Tile({ arrangement, toggleable, rotateable, tileId }) {
  /*
  arrangement = a four-character string that defines the configuration of a 2x2 tile
    using w, c, or . (dot).
      w = white
      c = color
      . = off

    "wwwc" => ww
              wc
  */
  const [colorKey, setColorKey] = useState(arrangement);

  toggleable = toggleable === undefined ? true : toggleable;
  rotateable = rotateable === undefined ? false : rotateable;

  function rotate() {
    setColorKey((prev) => {
      /*
      ww               ww    cw    wc
      wc -> rotated -> cw -> ww -> ww
      */
      const newColorKey = prev[2] + prev[0] + prev[3] + prev[1];
      console.log(newColorKey);
      return newColorKey;
    });
  }

  const colors = colorKey.split("").map((char) => {
    if (char === "w") return "white";
    if (char === "c") return "color";
    return "off";
  });

  return (
    <section className="tile" onClick={rotateable ? rotate : null}>
      <Pane color={colors[0]} keyProp={Math.random()} toggleable={false} />
      <Pane color={colors[1]} keyProp={Math.random()} toggleable={false} />
      <Pane color={colors[2]} keyProp={Math.random()} toggleable={false} />
      <Pane color={colors[3]} keyProp={Math.random()} toggleable={false} />
    </section>
  );
}
