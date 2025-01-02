import pokeball from "../assets/pokeball.svg";

export default function Title() {
  return (
    <div>
      <div className="heading">
        <img className="heading-logo" src={pokeball} alt="pokeball_img" />
        <h1 className="heading-title">Pokédex</h1>
      </div>
    </div>
  );
}
