import welcome from "cli-welcome";
import checkNode from "cli-check-node";
import unhandled from "cli-handle-unhandled";
import pkgJson from "../package.json";

export const init = () => {
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
