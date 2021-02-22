import fs from 'fs/promises';

const resolved = Promise.resolve(42);
const rejected = Promise.reject(new Error('problem!'));

async function report(promise) {
  try {
    const value = await promise;
    console.log('value', value);
  } catch (e) {
    console.error('error', e);
  }
}

async function main() {
  await report(resolved);
  await report(rejected);
  await report(fs.access('README.md'));
  await report(fs.access('not-here.txt'));
}

main();
