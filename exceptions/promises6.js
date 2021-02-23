import fs from 'fs/promises';

async function report(promise) {
  try {
    const value = await promise;
    console.log('value', value);
  } catch (e) {
    console.error('error', e);
  }
}

async function main() {
  await report(fs.access('README.md'));
  await report(fs.access('not-here.txt'));
}

main();
