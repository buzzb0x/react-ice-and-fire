import { useState } from "react";

import BookLoader from "../components/BookLoader";
import BooksPage from "../components/BooksPage";
import { Subtitle, Title } from "../components/Typography";
import { mainBooksIds } from "../lib/books";

const strings = {
  title: "A Song of Ice & Fire",
  mainWorksSectionTitle: "Main Works",
  otherWorksSectionTitle: "Explore the Universe",
  pageLoadButton: "Load more…",
};

const Home = () => {
  const [pages, setPages] = useState([1]);
  const [isLastPage, setIsLastPage] = useState(false);

  // I'm adding the index to an array because I think a map is sexier than a foreach.
  const loadMore = () => setPages([...pages, pages.length + 1]);

  return (
    <div>
      <Title>{strings.title}</Title>

      <div>
        <Subtitle>{strings.mainWorksSectionTitle}</Subtitle>

        <div style={{display: "flex", flexBasis: 0.5}}>
          {mainBooksIds.map((id) => (
            <BookLoader bookId={id} />
          ))}
        </div>
      </div>

      <div>
        <Subtitle>{strings.otherWorksSectionTitle}</Subtitle>

        <div>
          {pages.map((page) => (
            <BooksPage index={page} setIsLastPage={setIsLastPage} />
          ))}
        </div>

        {!isLastPage && <button onClick={loadMore}>{strings.pageLoadButton}</button>}
      </div>
    </div>
  );
};

export default Home;
