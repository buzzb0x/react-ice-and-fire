import { useParams } from "react-router-dom";
import { Subtitle, Title } from "../components/Typography";
import { useGot } from "../lib/api";
import { getImageUrl } from "../lib/lorem";

const strings = {
  summarySectionTitle: "Summary",
  deathSectionTitle: "Death",
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
      </div>

      <div>
        <Subtitle>{strings.relativesSectionTitle}</Subtitle>
      </div>

      <div>
        <Subtitle>{strings.povBooksSectionTitle}</Subtitle>
      </div>
    </div>
  );
};

export default Character;
