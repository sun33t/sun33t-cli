import { warning } from './colors';
export const debug = (isDebug: boolean, input: string[], flags: any) => {
  if (isDebug) {
    console.log(`${warning('DEBUGGING')}`);
    console.log('input:', input);
    console.log('flags:', flags);
  }
};
