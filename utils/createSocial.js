import chalk from "chalk";

/**
 * @author Suneet Misra <hello@suneet.codes>
 *
 * @function
 *
 * Takes a string and a colour and outputs a formatted string with padding and background colour
 *
 * @param   {string}  hexColor  A hex color, e.g. '#FFFFFF
 * @param   {string}  title     A title string
 *
 * @return  {string}            Correctly formatted title block
 */
const createColouredTitleBlock = (hexColor, title) => {
  // add a space in front of each title.
  const titleWithFrontPadding = title.padStart(title.length + 1, " ");

  // make each title equal in length
  const paddedTitle = `${titleWithFrontPadding.padEnd(10, " ")}`;

  // return formatted title block
  return `${chalk.hex(hexColor).bold.inverse(paddedTitle)}`;
};

/**
 *  @author Suneet Misra <hello@suneet.codes>
 *
 * @function
 *
 * Takes a string and an optional hex colour and outputs a styled url
 *
 * @param   {Object}  options -    The options containing color and url
 * @param   {string}  options.hexColor -  A hex color, e.g. '#FFFFFF
 * @param   {string}  options.url -        The weblink
 *
 * @return  {string}              The styled url
 */
const createColouredUrl = ({ hexColor, url }) => {
  if (hexColor) {
    return `${chalk.dim.underline.hex(hexColor)(url)}`;
  }
  return `${chalk.dim.underline.green(url)}`;
};

/**
 * @author Suneet Misra <hello@suneet.codes>
 *
 * @function
 *
 * Outputs fully styled social media link for the CLI
 *
 * @param   {string}  titleColor  A hex value for the title color
 * @param   {string}  urlColor    A hex value for the url color
 * @param   {string}  title       The title
 * @param   {string}  url         The url
 * @param   {number}  index       The current index of the social links array
 *
 * @return  {string}              A formatted social link for the CLI
 */
const createSocialLink = (titleColor, urlColor, title, url, index) => {
  // determine if this is the first item in the list.
  const isFirstItem = index === 0;

  // if first item, prepend with new line character
  const addNewLineIfAtStart = isFirstItem ? `\n` : ``;

  const styledTitle = createColouredTitleBlock(titleColor, title);
  const styledUrl = createColouredUrl({ url, hexColor: urlColor });

  // return a formatted social media link for each iteration
  return `${addNewLineIfAtStart} ${styledTitle}  ${styledUrl}\n`;
};

/**
 * @author Suneet Misra <hello@suneet.codes>
 *
 * @function
 *
 * Outputs all the fully styled social media links
 *
 * @param   {Object[]}  socialMediaLinks  The array of social media link objects
 *
 * @param   {string}    socialMedaLinks[].title The title of the link
 *
 * @param   {string}    socialMedaLinks[].url The url for the link
 *
 * @param   {string}    socialMedaLinks[].titleColor The hex value for the title color
 *
 * @param   {string}    [socialMedaLinks[].urlColor] The hex value for the url color
 *
 * @return  {string}    A formatted string block of styled social media links
 */
export const createSocial = (socialMediaLinks) =>
  socialMediaLinks
    .map(({ titleColor, urlColor, title, url }, index) =>
      createSocialLink(titleColor, urlColor, title, url, index)
    )
    .join("");
