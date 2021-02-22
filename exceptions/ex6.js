function logAll(msg, ...rest) {
  if (msg == null) {
    throw new Error('cannot log null');
  }
  console.log(msg);
  logAll(...rest);
}

try {
  logAll('hi', 'how', 'are', 'you?');
  logAll('message1', 'message2');
} catch (e) {
  console.error(e);
}
