import welcome from 'cli-welcome';
import pkg from '../../package.json';

export const init = (isClear: boolean) => {
  welcome({
    title: pkg.name,
    tagLine: '',
    version: pkg.version,
    description: pkg.description,
    color: '#000000',
    bgColor: '#fadc00',
    bold: true,
    clear: isClear,
  });
};
