
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

async function setup() {
  try {
    await greeting();
  } catch (e) {
    console.error(e);
  }

  console.log('all done');
}

setup();
