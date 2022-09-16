import { useGot } from "../lib/api";
import { getReleaseYear } from "../lib/books";
import Book from "./Book";

const BookLoader = ({ bookId }) => {
  const { data: book, error, isLoading } = useGot(`/books/${bookId}`);

  if (!isLoading) {
    return (
      <Book
        title={book?.name}
        releaseYear={getReleaseYear(book?.released)}
        id={bookId}
      />
    );
  }
};

export default BookLoader;
