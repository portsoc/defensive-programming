const a = new Array(10);
console.log(a.length);

const b = new Array(-1);
console.log(b.length);

try {
  const c = new Array(-1);
  console.log(c.length);
} catch (e) {
  console.error('exception:', e);
}

console.log('done');
