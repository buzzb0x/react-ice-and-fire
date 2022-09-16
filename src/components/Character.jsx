import { Link } from "react-router-dom";
import { getImageUrl } from "../lib/lorem";

const Character = ({ name, id }) => (
  <Link to={`/characters/${id}`}>
    <div>
      <img src={getImageUrl({ width: 68, height: 68 })} alt={name} />
      <div>{name}</div>
    </div>
  </Link>
);

export default Character;
