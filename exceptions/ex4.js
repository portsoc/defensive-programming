setTimeout(() => console.log('surprise!'), 3000);

function log(msg) {
  if (msg == null) {
    throw new Error('cannot log null');
  }
  console.log(msg);
}

log('hi');
log();
log('bye');
