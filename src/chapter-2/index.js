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
