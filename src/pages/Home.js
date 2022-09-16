import BookLoader from "../components/BookLoader";
import { Subtitle, Title } from "../components/Typography";
import { mainBooksIds } from "../lib/books";

const strings = {
  title: "A Song of Ice & Fire",
  mainWorksSectionTitle: "Main Works",
  otherWorksSectionTitle: "Explore the Universe",
};

const Home = () => {
  return (
    <div>
      <Title>{strings.title}</Title>

      <div>
        <Subtitle>{strings.mainWorksSectionTitle}</Subtitle>
        <div>
          {mainBooksIds.map((id) => (
            <BookLoader bookId={id} />
          ))}
        </div>
      </div>

      <div>
        <Subtitle>{strings.otherWorksSectionTitle}</Subtitle>
      </div>
    </div>
  );
};

export default Home;
