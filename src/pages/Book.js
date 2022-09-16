import { useParams } from "react-router-dom";
import { Subtitle, Title } from "../components/Typography";
import { useGot } from "../lib/api";
import { getReleaseYear } from "../lib/books";
import { getImageUrl } from "../lib/lorem";

const strings = {
  descriptionSectionTitle: "Description",
  firstReleased: (releaseYear) => `First released in ${releaseYear}`,
  povCharactersSectionTitle: "Main Characters",
  coverImgAlt: ({ title, releaseYear }) =>
    `Cover for ${title} (${releaseYear})`,
};

const Book = () => {
  const { bookId } = useParams();
  const { data: book, isLoading } = useGot(`/books/${bookId}`);
  const releaseYear = getReleaseYear(book?.released);

  if (isLoading) return <div>Loading…</div>;

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column-reverse", alignItems: "flex-start" }}>
        <div>
          <Title>{book.name}</Title>
          <div>{book.authors.join(", ")}</div>
        </div>
        <img
          src={getImageUrl({ width: 390, height: 600 })}
          alt={strings.coverImgAlt({ title: book.name, releaseYear })}
        />
      </div>

      <div>
        <Subtitle>{strings.descriptionSectionTitle}</Subtitle>
        <p>{strings.firstReleased(releaseYear)}</p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam fugit
          saepe impedit ad vel suscipit iste aspernatur deserunt eum placeat id
          praesentium, in fuga corrupti quasi, aperiam illum voluptate eligendi
          ipsam. Voluptas, magni quidem. Earum magni pariatur illo distinctio,
          fugiat tempore quia nemo ab repellat minima aperiam aliquid quae vel
          perspiciatis aliquam odit accusantium laudantium natus enim architecto
          beatae quibusdam atque esse? Ex qui ad itaque doloribus eligendi quos
          placeat adipisci fugit, facilis quo incidunt rem reiciendis, atque
          ipsa amet autem soluta debitis odit dignissimos porro ipsam sit. Alias
          minima et dolorem cupiditate doloribus perspiciatis ut blanditiis
          ipsam omnis fuga?
        </p>
      </div>

      <div>
        <Subtitle>{strings.povCharactersSectionTitle}</Subtitle>
      </div>
    </div>
  );
};

export default Book;
