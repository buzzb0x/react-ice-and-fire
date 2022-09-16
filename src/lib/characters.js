const getRandomAlias = (aliases) =>
  aliases[Math.floor(Math.random() * aliases.length)];

export { getRandomAlias };
