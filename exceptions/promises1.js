
async function log(msg) {
  if (msg == null) {
    throw new Error('cannot log null');
  }
  await console.log(msg);
}

async function greeting() {
  await log('hi');
  await log();
  await log('bye');
}

try {
  greeting();
} catch (e) {
  console.error(e);
}
