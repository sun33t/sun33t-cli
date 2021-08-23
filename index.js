#!/usr/bin/env node
const welcome = require("cli-welcome");
const chalk = require("chalk");
const pkgJson = require("./package.json");
const log = console.log;

const blogColor = chalk.hex("#6cc644").bold.inverse;
const workColor = chalk.hex("#c9510c").bold.inverse;
const githubColor = chalk.hex("#6e5494").bold.inverse;
const linkedinColor = chalk.hex("#0077b5").bold.inverse;
const url = chalk.dim.underline.green;

welcome({
  title: pkgJson.name,
  version: pkgJson.version,
  description: pkgJson.description,
  color: "#000000",
  bgColor: "#fadc00",
  bold: true,
  clear: true,
});

log(`${chalk.blue.bold(`Suneet Misra - Software Engineer`)}`);
log(
  `${chalk.italic(`
Hi! I'm a full stack developer from Liverpool, UK. I like building things with JavaScript and TypeScript and automating tasks by creating CLIs.

Within my current role I'm using Node, TypeScript, React, NextJS, TDD, Storybook, Figma, mono-repo architecture and paired programming. I love collaboration and consider myself a life-long learner with a growth mindset which helps to keep me curious. I love sharing my knowledge with my colleagues as well as learning new things from them in turn! If you're interested in connecting with me, you can find me at:`)}`
);
log(`

${blogColor(` Blog     `)}  ${url(`https://suneet.codes`)}
${workColor(` Work     `)}  ${url(`https://verse.co.uk`)}
${githubColor(` GitHub   `)}  ${url(`https://github.com/sun33t`)}
${linkedinColor(` LinkedIn `)}  ${url(`https://linkedin.com/in/suneetmisra`)}
`);
