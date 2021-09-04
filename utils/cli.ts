import meow, { AnyFlags, Options } from 'meow';

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
	},
};

const helpText = `
Usage
  npx sun33t [options]

Options
  --social      Show the social info (default is true)
  --no-social   Don't show the social info
  --bio         Show developer bio
  --no-bio      Don't show the developer bio

Examples
  npx sun33t --no-social
`;

const cli = meow(helpText, options);

export default cli;
