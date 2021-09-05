#!/usr/bin/env node
import { cli } from './utils/cli';
import { init } from './utils/init';
import { logDebug } from './utils/debug';
import { logBio, logSocial, styledTitle } from './data';

const log = console.log;

const { flags, input } = cli;
const isDebug = <boolean>flags.debug;
const isSocial = <boolean>flags.social;
const isBio = <boolean>flags.bio;
const isClear = <boolean>flags.clear;

(async () => {
  init(isClear);
  input.includes('help') && cli.showHelp(0);
  log(styledTitle);
  logBio(isBio);
  logSocial(isSocial);
  logDebug(isDebug, input, flags);
})();
