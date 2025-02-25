import Tile from "./Tile";

export default function TileReference() {
  return (
    <header>
      <section className="tile-reference">
        <Tile arrangement="wwww" />
        <Tile arrangement="cccc" />
        <Tile arrangement="wwwc" />
        <Tile arrangement="cccw" />
        <Tile arrangement="wwcc" />
        <Tile arrangement="cwwc" />
      </section>
    </header>
  );
}
