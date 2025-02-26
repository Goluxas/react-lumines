import { Pane } from "./Tile";

export default function Board() {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <Pane color="off" keyProp={1} />
          </td>
          <td>
            <Pane color="off" keyProp={2} />
          </td>
          <td>
            <Pane color="off" keyProp={3} />
          </td>
          <td>
            <Pane color="off" keyProp={4} />
          </td>
        </tr>
        <tr>
          <td>
            <Pane color="off" keyProp={5} />
          </td>
          <td>
            <Pane color="off" keyProp={6} />
          </td>
          <td>
            <Pane color="off" keyProp={7} />
          </td>
          <td>
            <Pane color="off" keyProp={8} />
          </td>
        </tr>
        <tr>
          <td>
            <Pane color="white" keyProp={9} />
          </td>
          <td>
            <Pane color="white" keyProp={10} />
          </td>
          <td>
            <Pane color="off" keyProp={11} />
          </td>
          <td>
            <Pane color="off" keyProp={12} />
          </td>
        </tr>
        <tr>
          <td>
            <Pane color="white" keyProp={13} />
          </td>
          <td>
            <Pane color="color" keyProp={14} />
          </td>
          <td>
            <Pane color="white" keyProp={15} />
          </td>
          <td>
            <Pane color="off" keyProp={16} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
