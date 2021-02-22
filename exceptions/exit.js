function logAll(msg, ...rest) {
  if (msg == null) {
    console.error('CRITICAL ERROR');
    process.exit(1);
  }
  console.log(msg);
  logAll(...rest);
}

logAll('hi', 'how', 'are', 'you?');
