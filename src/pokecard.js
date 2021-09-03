import imgs from "./pokemonImages";
import "./pokecard.css";

const Pokecard = ({ id, name, type, base_experience }) => {
  return (
    <div className="Pokecard">
      <h3 className="Pokecard-name">{name}</h3>
      <img src={imgs[id]} alt={name} className="Pokecard-image" />
      <p className="Pokecard-info">Type: {type}</p>
      <p className="Pokecard-info">EXP: {base_experience} </p>
    </div>
  );
};

export default Pokecard;
