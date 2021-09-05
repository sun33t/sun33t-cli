#!/usr/bin/env node
import { cli, debug, init, social, bio, title, github } from './utils';

const { flags, input } = cli;
const isDebug = <boolean>flags.debug;
const isSocial = <boolean>flags.social;
const isBio = <boolean>flags.bio;
const isClear = <boolean>flags.clear;
const showGithub = <boolean>flags.github;

(async () => {
  init(isClear);
  input.includes('help') && cli.showHelp(0);
  title();
  !showGithub && bio(isBio);
  !showGithub && social(isSocial);
  showGithub && (await github());
  debug(isDebug, input, flags);
})();
