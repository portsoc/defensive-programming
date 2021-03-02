function log(msg) {
  if (msg == null) {
    throw new Error('cannot log null');
  }
  console.log(msg);
}

function greeting(who) {
  log('hi');
  log(who);
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
