function receivesAFunction(cb) {
  cb();
}

function returnsANamedFunction() {
  return function fn() {};
}

function returnsAnAnonymousFunction() {
  return () => {};
}
