import { useEffect, useState } from "react";

import { getResourceFromUrl, useGot } from "../lib/api";
import { getReleaseYear, mainBooksIds } from "../lib/books";
import Book from "./Book";

const BooksPage = ({ index, setIsLastPage }) => {
  const { data: rawBooks, isLoading } = useGot(`/books?page=${index}`);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // This effect removes the main books from the request so that
    // they're not displayed twice.

    const cleanBooks = rawBooks?.filter((b) => {
      const { id } = getResourceFromUrl(b.url);
      return !mainBooksIds.includes(id);
    });

    setBooks(cleanBooks);
  }, [rawBooks]);

  useEffect(() => {
    // This effect checks the length of the returned books to see
    // if there are more to load. Can be improved as the correct way would be
    // to use the headers in the response, but it was slower.

    if (rawBooks?.length < 10) setIsLastPage(true);
  }, [rawBooks, setIsLastPage]);

  return books?.map((b) => (
    <Book
      title={b.name}
      id={getResourceFromUrl(b.url).id}
      releaseYear={getReleaseYear(b.released)}
    />
  ));
};

export default BooksPage;