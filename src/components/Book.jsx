import { Link } from "react-router-dom";
import { getImageUrl } from "../lib/lorem";

const strings = {
  coverImgAlt: ({ title, releaseYear }) =>
    `Cover for ${title} (${releaseYear})`,
};

const Book = ({ title, releaseYear, coverUrl, id }) => (
  <Link to={`/books/${id}`}>
    <div>
      <img
        src={coverUrl || getImageUrl({ width: 130, height: 200 })}
        alt={strings.coverImgAlt({ title, releaseYear })}
        style={{ width: 130 }}
      />
      <div>{title}</div>
      <div>{releaseYear}</div>
    </div>
  </Link>
);

export default Book;
