import { getImageUrl } from "../lib/lorem";

const strings = {
  coatOfArmsAlt: (houseName) =>
    `Illustration of the coat of arms of ${houseName}`,
};

const House = ({ name }) => (
  <div>
    <img
      src={getImageUrl({ width: 68, height: 68 })}
      alt={strings.coatOfArmsAlt(name)}
    />
    <div>{name}</div>
  </div>
);

export default House;
