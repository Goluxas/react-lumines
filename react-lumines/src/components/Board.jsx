import { ToggleablePane } from "./Tile";

export default function Board() {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <ToggleablePane color="off" />
          </td>
          <td>
            <ToggleablePane color="off" />
          </td>
          <td>
            <ToggleablePane color="off" />
          </td>
          <td>
            <ToggleablePane color="off" />
          </td>
        </tr>
        <tr>
          <td>
            <ToggleablePane color="off" />
          </td>
          <td>
            <ToggleablePane color="off" />
          </td>
          <td>
            <ToggleablePane color="off" />
          </td>
          <td>
            <ToggleablePane color="off" />
          </td>
        </tr>
        <tr>
          <td>
            <ToggleablePane color="white" />
          </td>
          <td>
            <ToggleablePane color="white" />
          </td>
          <td>
            <ToggleablePane color="off" />
          </td>
          <td>
            <ToggleablePane color="off" />
          </td>
        </tr>
        <tr>
          <td>
            <ToggleablePane color="white" />
          </td>
          <td>
            <ToggleablePane color="color" />
          </td>
          <td>
            <ToggleablePane color="white" />
          </td>
          <td>
            <ToggleablePane color="off" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
