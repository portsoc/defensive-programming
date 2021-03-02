async function main() {
  const promise = Promise.reject(new Error('boom'));
  console.log('hi');
  const value = await promise;
  console.log(value);
}

main();

console.log('bye');
