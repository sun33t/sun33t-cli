#!/usr/bin/env node
const log = console.log;
const init = require("./utils/init");
const { title, bio, social } = require("./data");

init();

(async () => {
  log(title);
  log(bio);
  log(social);
})();
