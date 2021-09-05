import meow, { AnyFlags, Options } from 'meow';
import { titleColor } from './colors';

const options: Options<AnyFlags> = {
  importMeta: import.meta,
  flags: {
    social: {
      type: 'boolean',
      default: true,
    },
    bio: {
      type: 'boolean',
      default: true,
    },
    debug: {
      type: 'boolean',
      default: false,
    },
  },
};

const helpText = `
${titleColor(`Usage`)}
  npx sun33t [options]

${titleColor(`Options`)}
  --social      Show the social info (default is true)
  --no-social   Don't show the social info
  --bio         Show developer bio
  --no-bio      Don't show the developer bio
  --debug       Display debugging information
  --no-debug    Don't display debugging information

${titleColor(`Examples`)}
  npx sun33t --no-social
`;

export const cli = meow(helpText, options);
