#!/usr/bin/env node
const welcome = require("cli-welcome");
const pkgJson = require("./package.json");

welcome({
  title: pkgJson.name,
  tagLine: "😀",
  version: pkgJson.version,
  description: pkgJson.description,
  color: "#000000",
  bgColor: "#fadc00",
  bold: true,
  clear: true,
});

console.log(`
Suneet Misra - nodeJS Engineer

Hi! I'm a node developer from Liverpool, UK. I like building things with JavaScript and TypeScript and automating tasks by creating CLIs.

Within my current role I'm using Node, TypeScript, React, NextJS, TDD, Storybook, Figma, mono-repo architecture and paired programming. I love collaboration and consider myself a life-long learner with a growth mindset which helps to keep me curious. I love sharing my knowledge with my colleagues as well as learning new things from them in turn! If you're interested in connecting with me, you can find me at:

💻  Blog:     https://suneet.codes
🧰  Work:     https://verse.co.uk
📖  GitHub:   https://github.com/sun33t
💼  LinkedIn: https://linkedin.com/in/suneetmisra

`);
