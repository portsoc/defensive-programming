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

function setup() {
  try {
    setTimeout(greeting, 1000);
  } catch (e) {
    console.error(e);
  }
}

setup();
