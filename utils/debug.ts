import { warning } from './colors';
export const logDebug = (isDebug: boolean, input: string[], flags: any) => {
  if (isDebug) {
    console.log(`${warning('DEBUGGING')}`);
    console.log('input:', input);
    console.log('flags:', flags);
  }
};
