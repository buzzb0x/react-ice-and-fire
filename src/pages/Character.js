import { useParams } from "react-router-dom";
import BookLoader from "../components/BookLoader";
import Spoiler from "../components/Spoiler";
import { Subtitle, Title } from "../components/Typography";
import { getResourceFromUrl, useGot } from "../lib/api";
import { getRandomAlias } from "../lib/characters";
import { getImageUrl } from "../lib/lorem";

const strings = {
  summarySectionTitle: "Summary",
  deathSectionTitle: "Death",
  characterIsAlive: "This character is alive… for now.",
  povBooksSectionTitle: "Point-of-View Chapters",
  relativesSectionTitle: "Relatives",
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

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi officia
          dolorum quos atque quia, corrupti quae non hic assumenda. Dolorum nam
          facere, doloribus adipisci alias totam iusto voluptas est, accusamus,
          commodi aliquam excepturi! Commodi, doloremque explicabo. Quae nihil
          sequi eligendi architecto totam hic laborum dicta in illo assumenda
          doloremque similique vel aliquid dignissimos, velit laboriosam?
          Laudantium similique accusamus rem, totam dolore porro veniam quaerat
          doloremque vitae odio ab culpa maxime saepe expedita doloribus fugit
          officia, nobis tenetur voluptatibus dignissimos inventore architecto
          assumenda, aperiam reprehenderit. Cupiditate iure accusamus esse
          fugiat exercitationem laboriosam, tenetur est vel quam pariatur
          consequuntur corporis porro fuga.
        </p>
      </div>

      <div>
        <Subtitle>{strings.deathSectionTitle}</Subtitle>
        <Spoiler>{character.died || strings.characterIsAlive}</Spoiler>
      </div>

      <div>
        <Subtitle>{strings.relativesSectionTitle}</Subtitle>
      </div>

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
