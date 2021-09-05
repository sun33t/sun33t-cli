import pkg from '../package.json';
import { titleColor } from './colors';

export const title = () => {
  const title = `${pkg.author.name} - Software Engineer`;
  console.log(titleColor(title));
};
