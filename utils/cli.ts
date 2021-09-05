import meow, { AnyFlags, Options, Result } from 'meow';
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
    clear: {
      type: 'boolean',
      default: true,
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
  
  --clear       Clears terminal's previous output
  --no-clear    Doesn't clear the terminal's previous output

${titleColor(`Examples`)}
  npx sun33t --no-social
`;

export const cli: Result<AnyFlags> = meow(helpText, options);
