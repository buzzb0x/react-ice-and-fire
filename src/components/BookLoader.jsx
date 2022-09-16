import { useGot } from "../lib/api";
import { getReleaseYear, mainBooksIds } from "../lib/books";
import Book from "./Book";

const BookLoader = ({ bookId }) => {
  const { data: book, error, isLoading } = useGot(`/books/${bookId}`);

  if (!isLoading) {
    return (
      <Book
        coverUrl={
          mainBooksIds.includes(bookId) && `/assets/book-covers/${bookId}.jpg`
        }
        title={book?.name}
        releaseYear={getReleaseYear(book?.released)}
        id={bookId}
      />
    );
  }
};

export default BookLoader;
