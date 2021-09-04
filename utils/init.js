const pkgJson = require("../package.json");
const welcome = require("cli-welcome");
const checkNode = require("cli-check-node");
const unhandled = require("cli-handle-unhandled");

module.exports = () => {
  unhandled();
  welcome({
    title: pkgJson.name,
    version: pkgJson.version,
    description: pkgJson.description,
    color: "#000000",
    bgColor: "#fadc00",
    bold: true,
    clear: true,
  });

  checkNode("12");
};
