import { Pane } from "./Tile";

export default function Board() {
  return (
    <table>
      <tr>
        <td>
          <Pane color="off" key={1} />
        </td>
        <td>
          <Pane color="off" key={2} />
        </td>
        <td>
          <Pane color="off" key={3} />
        </td>
        <td>
          <Pane color="off" key={4} />
        </td>
      </tr>
      <tr>
        <td>
          <Pane color="off" key={5} />
        </td>
        <td>
          <Pane color="off" key={6} />
        </td>
        <td>
          <Pane color="off" key={7} />
        </td>
        <td>
          <Pane color="off" key={8} />
        </td>
      </tr>
      <tr>
        <td>
          <Pane color="off" key={9} />
        </td>
        <td>
          <Pane color="off" key={10} />
        </td>
        <td>
          <Pane color="off" key={11} />
        </td>
        <td>
          <Pane color="off" key={12} />
        </td>
      </tr>
      <tr>
        <td>
          <Pane color="off" key={13} />
        </td>
        <td>
          <Pane color="off" key={14} />
        </td>
        <td>
          <Pane color="off" key={15} />
        </td>
        <td>
          <Pane color="off" key={16} />
        </td>
      </tr>
    </table>
  );
}
