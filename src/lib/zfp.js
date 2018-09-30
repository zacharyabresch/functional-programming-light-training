import identity from './fns/identity';
import constant from './fns/constant';
import unary from './fns/unary';

const spreadArgs = fn => args => fn(...args);
const gatherArgs = fn => (...args) => fn(args);
const reverseArgs = fn => (...args) => fn(...args.reverse());
const partial = (fn, ...presetArgs) => (...laterArgs) =>
  fn(...presetArgs, ...laterArgs);
const partialRight = (fn, ...presetArgs) => (...laterArgs) =>
  fn(...laterArgs, ...presetArgs);

export {
  identity,
  constant,
  unary,
  spreadArgs,
  gatherArgs,
  reverseArgs,
  partial,
  partialRight
};
