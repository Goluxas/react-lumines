import { useState } from "react";
import "./App.css";

import Board from "./components/Board";
import TileReference from "./components/TileReference";

function App() {
  const [selectedTile, setSelectedTile] = useState(undefined);

  function selectTile(arrangement) {
    console.log(`Selected ${arrangement}`);
    setSelectedTile(arrangement);
  }

  return (
    <main>
      <TileReference selectTile={selectTile} />
      <Board selectedTile={selectedTile} />
    </main>
  );
}

export default App;
