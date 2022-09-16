const generateSummary = ({ name, born, gender, culture, playedBy }) => {
  const pronoun = { female: "She", male: "He" }[gender.toLowerCase()];

  // We just need to remove the uppercasing from the first word of this property.
  const bornCased = (() => {
    const words = born?.split(" ");
    return born && [words[0].toLowerCase(), ...words.slice(1)].join(" ");
  })();

  const strings = [
    born && `{subject} was born ${bornCased}.`,
    culture && `{Subject} is of ${culture} descent.`,
    playedBy?.[0] &&
      `In the television series, {subject} is played by ${playedBy[0]}.`,
  ].filter((c) => !!c);

  if (!strings.length) return `Not much is known about ${name}`;

  const cleanStrings = [];
  cleanStrings.push(strings[0].replace("{subject}", name));
  cleanStrings.push(
    ...strings
      .splice(1)
      .map((s) =>
        s
          .replace("{subject}", pronoun.toLowerCase())
          .replace("{Subject}", pronoun)
      )
  );

  return cleanStrings.join(" ");
};

const getRandomAlias = (aliases) =>
  aliases[Math.floor(Math.random() * aliases.length)];

export { generateSummary, getRandomAlias };
