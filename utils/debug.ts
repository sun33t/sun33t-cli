import { warning } from './colors';
export const debug = (input: string[], flags: any) => {
  console.log(`${warning('DEBUGGING')}`);
  console.log('input:', input);
  console.log('flags:', flags);
};
