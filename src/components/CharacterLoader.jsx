import { useGot } from "../lib/api";
import Character from "./Character";

const CharacterLoader = ({ characterId }) => {
  const { data: character, isLoading } = useGot(`/characters/${characterId}`);

  if (isLoading) return <div>Loading…</div>;

  return <Character name={character.name} id={characterId} />;
};

export default CharacterLoader;
