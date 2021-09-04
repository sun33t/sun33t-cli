// title has to be 10 characters long

const createSocialLink = (titleColor, urlColor, title, url, index) => {
  // determine if this is the first item in the list.
  const isFirstLine = index === 0;

  // if first item, prepend with new line character
  const addNewLine = isFirstLine ? `\n` : ``;

  // add a space in front of each title.
  const titleWithFrontPadding = title.padStart(title.length + 1, " ");

  // make each title equal in length
  const paddedTitle = `${titleWithFrontPadding.padEnd(10, " ")}`;

  // return a formatted social media link for each iteration
  return `${addNewLine} ${titleColor(paddedTitle)}  ${urlColor(url)}\n`;
};

exports.createSocial = (socialMediaLinks) => {
  return socialMediaLinks
    .map(({ titleColor, urlColor, title, url }, index) =>
      createSocialLink(titleColor, urlColor, title, url, index)
    )
    .join("");
};
