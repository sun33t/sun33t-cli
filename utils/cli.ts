import meow, { AnyFlags, Options, Result } from 'meow';
import { green, yellow, cyan, grey } from './colors';

export const options: Options<AnyFlags> = {
  importMeta: import.meta,
  inferType: true,
  flags: {
    social: {
      type: 'boolean',
      default: true,
      alias: 's',
    },
    bio: {
      type: 'boolean',
      default: true,
      alias: 'b',
    },
    debug: {
      type: 'boolean',
      default: false,
      alias: 'd',
    },
    clear: {
      type: 'boolean',
      default: true,
      alias: 'c',
    },
    version: {
      type: 'boolean',
      default: false,
      alias: 'v',
    },
    github: {
      type: 'boolean',
      default: false,
      alias: 'g',
    },
  },
};

const helpText = `
Usage
  ${green(`npx sun33t`)} ${yellow('[--option]')} ${cyan('<command>')}

Options
  ${yellow(`--social, -s`)}      Show the social info ${grey('(DEFAULT = TRUE)')}
  ${yellow(`--no-social`)}       Don't show the social info

  ${yellow(`--bio, -b`)}         Show developer bio ${grey('(DEFAULT = TRUE)')}
  ${yellow(`--no-bio`)}          Don't show the developer bio

  ${yellow(`--debug, -d`)}       Display debugging information
  ${yellow(`--no-debug`)}        Don't display debugging information

  ${yellow(`--github, -g`)}      Display list of GitHub repos
  ${yellow(`--no-debug`)}        Don't display GitHub repos

  ${yellow(`--clear, -c`)}       Clears terminal's previous output ${grey('(DEFAULT = TRUE)')}
  ${yellow(`--no-clear`)}        Doesn't clear the terminal's previous output

  ${yellow(`--version, -v`)}     Displays the CLI version number

Commands
  ${cyan('help')}              Show's help menu
  
Examples
${green(`npx sun33t`)} ${yellow('--no-social')}
${green(`npx sun33t`)} ${yellow('--debug')}
`;

export const cli: Result<AnyFlags> = meow(helpText, options);
