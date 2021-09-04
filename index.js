#!/usr/bin/env node
// const meow = require("meow");
import { init } from "./utils/init";
import { styledBio, styledSocial, styledTitle } from "./data";

const log = console.log;
// const cli = meow();

(async () => {
  init();
  log(styledTitle);
  log(styledBio);
  log(styledSocial);
})();
