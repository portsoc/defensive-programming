import fs from 'fs/promises';

const resolved = Promise.resolve(42);
const rejected = Promise.reject(new Error('problem!'));

function report(promise) {
  return promise.then(
    (value) => {
      console.log('value', value);
    },
    (e) => {
      console.error('error', e);
    },
  );
}

report(resolved)
  .then(() => report(rejected))
  .then(() => report(fs.access('README.md')))
  .then(() => report(fs.access('not-here.txt')));
