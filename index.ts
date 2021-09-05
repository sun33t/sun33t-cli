#!/usr/bin/env node
import { cli } from './utils/cli';
import { init } from './utils/init';
import { debug } from './utils/debug';
import { styledBio, styledSocial, styledTitle } from './data';

const log = console.log;

(async () => {
  init();
  log(styledTitle);
  cli.flags.bio && log(styledBio);
  cli.flags.social && log(styledSocial);
  cli.flags.debug && debug(cli.input, cli.flags);
})();
