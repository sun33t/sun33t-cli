const { bioColor, titleColor } = require("./utils/colors");

const { createSocial } = require("./utils/createSocial");

/** Content */
const title = `Suneet Misra - Software Engineer`;

const bioText = `
Hi! I'm a full stack developer from Liverpool, UK. I like building things with JavaScript and TypeScript and automating tasks by creating CLIs.

Within my current role I'm using Node, TypeScript, React, NextJS, TDD, Storybook, Figma, mono-repo architecture and paired programming. I love collaboration and consider myself a life-long learner with a growth mindset which helps to keep me curious. I love sharing my knowledge with my colleagues as well as learning new things from them in turn! If you're interested in connecting with me, you can find me at:`;

const socialLinks = [
  {
    title: "Blog",
    url: "https://suneet.codes",
    titleColor: `#6cc644`,
  },
  {
    title: "Work",
    url: "https://verse.co.uk",
    titleColor: `#c9510c`,
  },
  {
    title: "GitHub",
    url: "https://github.com/sun33t",
    titleColor: `#6e5494`,
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/suneetmisra",
    titleColor: `#0077b5`,
  },
];

/** Output */
exports.title = `${titleColor(title)}`;
exports.bio = `${bioColor(bioText)}`;
exports.social = createSocial(socialLinks);
