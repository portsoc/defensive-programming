const fulfilled = Promise.resolve('Rich');
const rejected = Promise.reject(new Error('boom'));

async function report(promise) {
  try {
    const value = await promise;
    console.log('value', value);
  } catch (e) {
    console.error('error', e);
  }
}

async function main() {
  await report(fulfilled);
  await report(rejected);
}

main();
