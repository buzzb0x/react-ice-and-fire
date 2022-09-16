import { Link } from "react-router-dom";
import { Title } from "../components/Typography";

const strings = {
  title: "Looks like you're in the wrong place",
  caption:
    "This page does not exist or has been deleted. If you think this is a mistake, please contact us.",
  homeButton: "Go back home →",
};

const NotFound = () => (
  <div>
    <Title>{strings.title}</Title>
    <p>{strings.caption}</p>
    <Link to="/">{strings.homeButton}</Link>
  </div>
);

export default NotFound;
