const unary = fn => arg => fn(arg);
const identity = v => v;
const constant = v => () => v;
const spreadArgs = fn => argsArr => fn(...argsArr);
const gatherArgs = fn => (...argsArr) => fn(argsArr);
const reverseArgs = fn => (...args) => fn(...args.reverse());
const partial = (fn, ...presetArgs) => (...laterArgs) =>
  fn(...presetArgs, ...laterArgs);
const partialRight = (fn, ...presetArgs) => (...laterArgs) =>
  fn(...laterArgs, ...presetArgs);

const upper = txt => txt.toUpperCase();
const output = (msg, formatFn = identity) => {
  msg = formatFn(msg);
  console.log(msg);
};
const takesTwo = (x, y) => console.log(x + y);
const shouldBe13 = fn => fn([10, 3]);
const combineFirstTwo = ([v1, v2]) => v1 + v2;
const add = (x, y) => x + y;

const numbers = [1, 2, 3, 4, 5];
const words = '   Now is the time for all...   '.split(/\s|\b/);

console.log(numbers.map(unary(parseInt)));
console.log(words);
console.log(words.filter(identity));
output('Hello guys', upper);
output('Hello guys');
shouldBe13(takesTwo);
shouldBe13(spreadArgs(takesTwo));
console.log(numbers.reduce(gatherArgs(combineFirstTwo)));
console.log(numbers.map(val => add(3, val)));

console.log('<----- Currying ----->\n\n');

const curry = (fn, arity = fn.length, nextCurried) =>
  (nextCurried = prevArgs => nextArg => {
    const args = [...prevArgs, nextArg];
    if (args.length >= arity) {
      return fn(...args);
    } else {
      return nextCurried(args);
    }
  })([]);

const uncurry = fn => (...args) => {
  let ret = fn;
  for (let arg of args) {
    ret = ret(arg);
  }

  return ret;
};

const looseCurry = (fn, arity = fn.length, nextCurried) =>
  (nextCurried = prevArgs => (...nextArgs) => {
    const args = [...prevArgs, ...nextArgs];
    if (args.length >= arity) {
      return fn(...args);
    } else {
      return nextCurried(args);
    }
  })([]);

const adder = curry(add);
console.log(numbers.map(adder(3)));

const sum = (...nums) => {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  return total;
};

const curriedSum = curry(sum, 5);
const looseCurriedSum = looseCurry(sum, 5);
const uncurriedSum = uncurry(curriedSum);

console.log(sum(1, 2, 3, 4, 5));
console.log(curriedSum(1)(2)(3)(4)(5));
console.log(looseCurriedSum(1)(2, 3)(4, 5));
console.log(uncurriedSum(1, 2, 3, 4, 5));
