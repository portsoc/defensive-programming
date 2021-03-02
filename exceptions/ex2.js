function log(msg) {
  if (msg == null) {
    throw new Error('cannot log null');
  }
  console.log(msg);
}

try {
  log('hi');
  log();
  log('bye');
} catch (e) {
  console.error(e);
}
