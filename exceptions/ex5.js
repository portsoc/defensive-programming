function log(msg) {
  if (msg == null) {
    throw new Error('cannot log null');
  }
  console.log(msg);
}

function greeting() {
  log('hi');
  log();
  log('bye');
}

try {
  greeting();
} catch (e) {
  console.error('message:', e.message);
  console.error('stack:', e.stack);
}
