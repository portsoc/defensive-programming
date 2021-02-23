async function main() {
  const promise = Promise.resolve('Rich');
  console.log('hi');
  const value = await promise;
  console.log(value);
}

main();

console.log('bye');
