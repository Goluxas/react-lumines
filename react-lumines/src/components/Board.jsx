import { useState } from "react";

export function Tile({ color: initialColor, key }) {
  const [color, setColor] = useState(initialColor);

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
    <div key={key} className={`tile ${color}-tile`} onClick={toggleColor}></div>
  );
}

export default function Board() {
  return (
    <table>
      <tr>
        <td>
          <Tile color="off" key={1} />
        </td>
        <td>
          <Tile color="off" key={2} />
        </td>
        <td>
          <Tile color="off" key={3} />
        </td>
        <td>
          <Tile color="off" key={4} />
        </td>
      </tr>
      <tr>
        <td>
          <Tile color="off" key={5} />
        </td>
        <td>
          <Tile color="off" key={6} />
        </td>
        <td>
          <Tile color="off" key={7} />
        </td>
        <td>
          <Tile color="off" key={8} />
        </td>
      </tr>
      <tr>
        <td>
          <Tile color="off" key={9} />
        </td>
        <td>
          <Tile color="off" key={10} />
        </td>
        <td>
          <Tile color="off" key={11} />
        </td>
        <td>
          <Tile color="off" key={12} />
        </td>
      </tr>
      <tr>
        <td>
          <Tile color="off" key={13} />
        </td>
        <td>
          <Tile color="off" key={14} />
        </td>
        <td>
          <Tile color="off" key={15} />
        </td>
        <td>
          <Tile color="off" key={16} />
        </td>
      </tr>
    </table>
  );
}
