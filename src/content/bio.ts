import { bioColor } from '../utils';
import { bioText } from '../data';

export const bio = (isBio: boolean) => {
  if (isBio) {
    console.log(bioColor(bioText));
  }
};
