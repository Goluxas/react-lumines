import Tile from "./Tile";

export default function TileReference() {
  return (
    <header>
      <section className="tile-reference">
        <Tile arrangement="wwww" rotateable={true} />
        <Tile arrangement="cccc" rotateable={true} />
        <Tile arrangement="wwwc" rotateable={true} />
        <Tile arrangement="cccw" rotateable={true} />
        <Tile arrangement="wwcc" rotateable={true} />
        <Tile arrangement="wccw" rotateable={true} />
      </section>
    </header>
  );
}
