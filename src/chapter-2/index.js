const { log } = console;
log('chapter 2');

function threeity(x, y, z) {}
function twopsWithDefault(x, y = 5) {}
function twopsWithRest(x, ...args) {}
function twopsWithDestructuring({ x, y }) {}
function threepsWithArgs(x, y, z, ...args) {
  log(x);
  log(y);
  log(z);
  log(args);
}

log(threeity.length);
log(twopsWithDefault.length);
log(twopsWithRest.length);
log(twopsWithDestructuring.length);
threepsWithArgs(
  'face',
  'poops',
  'stupid',
  'bag',
  'steak coupons',
  'discounted paper'
);

function forEach(list, fn) {
  for (let v of list) {
    fn(v);
  }
}

forEach([1, 2, 3, 4, 5], function each(val) {
  log(val);
});

function upperF() {
  return function inner(msg) {
    return msg.toUpperCase();
  };
}

const uF = upperF();
log(uF('upper me bish'));

function person(name) {
  return function identify() {
    log(`I am ${name}`);
  };
}

const fred = person('Fred');
const susan = person('Susan');

fred();
susan();

function runningCounter(start) {
  let val = start;
  return function current(increment = 1) {
    val = val + increment;
    return val;
  };
}

const score = runningCounter(0);
log(score());
log(score());
log(score(13));

function makeAdder(x) {
  return function sum(y) {
    return x + y;
  };
}

const addTo10 = makeAdder(10);
const addTo37 = makeAdder(37);

log(addTo10(3));
log(addTo10(90));
log(addTo37(13));

function formatter(formatFn) {
  return function inner(str) {
    return formatFn(str);
  };
}

const lower = formatter(function formatting(v) {
  return v.toLowerCase();
});

const upperFirst = formatter(function formatting(v) {
  return v[0].toUpperCase() + v.substr(1).toLowerCase();
});

log(lower('WOW'));
log(upperFirst('hello'));
