import { useParams } from "react-router-dom";
import BookLoader from "../components/BookLoader";
import HouseLoader from "../components/HouseLoader";
import Spoiler from "../components/Spoiler";
import { Subtitle, Title } from "../components/Typography";
import { getResourceFromUrl, useGot } from "../lib/api";
import { generateSummary, getRandomAlias } from "../lib/characters";
import { getImageUrl } from "../lib/lorem";

const strings = {
  summarySectionTitle: "Summary",
  titlesSectionTitle: "Titles",
  characterHasNoTitles: "This character has no title.",
  allegiancesSectionTitle: "Allegiances",
  deathSectionTitle: "Death",
  characterIsAlive: "This character is alive… for now.",
  povBooksSectionTitle: "Point-of-View Chapters",
  // relativesSectionTitle: "Relatives",
};

const Character = () => {
  const { characterId } = useParams();
  const { data: character, isLoading } = useGot(`/characters/${characterId}`);

  if (isLoading) return <div>Loading…</div>;

  return (
    <div>
      <img
        src={getImageUrl({ width: 100, height: 200 })}
        alt={character.name}
      />
      <Title>{character.name}</Title>

      {character?.aliases?.[0] && (
        <p>AKA {getRandomAlias(character.aliases)}</p>
      )}

      <div>
        <Subtitle>{strings.summarySectionTitle}</Subtitle>

        <p>{generateSummary(character)}</p>
      </div>

      <div>
        <Subtitle>{strings.titlesSectionTitle}</Subtitle>
        <p>
          {character.titles?.[0] ? (
            character.titles.join(", ")
          ) : (
            <em>{strings.characterHasNoTitles}</em>
          )}
        </p>
      </div>

      <div>
        <Subtitle>{strings.allegiancesSectionTitle}</Subtitle>
        {character.allegiances.map((h) => (
          <HouseLoader houseId={getResourceFromUrl(h).id} />
        ))}
      </div>

      <div>
        <Subtitle>{strings.deathSectionTitle}</Subtitle>
        <Spoiler>{character.died || strings.characterIsAlive}</Spoiler>
      </div>

      {/* <div>
        <Subtitle>{strings.relativesSectionTitle}</Subtitle>
      </div> */}

      <div>
        <Subtitle>{strings.povBooksSectionTitle}</Subtitle>

        <div>
          {character.povBooks.map((b) => (
            <BookLoader bookId={getResourceFromUrl(b).id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Character;
