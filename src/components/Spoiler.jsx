import { useState } from "react";

const strings = {
  spoilerButton: "Press to reveal",
};

const Spoiler = ({ children }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const revealSpoiler = () => setIsRevealed(true);

  return (
    <div>
      {isRevealed ? (
        children
      ) : (
        <button onClick={revealSpoiler}>{strings.spoilerButton}</button>
      )}
    </div>
  );
};

export default Spoiler;
