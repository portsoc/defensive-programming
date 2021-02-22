async function russianRoulette() {
  console.log('spinning the barrel, pulling the trigger…');
  if (Math.random() < 1 / 6) {
    throw new Error('Bam!');
  } else {
    await console.log('click');
  }
}

russianRoulette()
  .then(russianRoulette)
  .then(russianRoulette)
  .then(russianRoulette)
  .then(russianRoulette)
  .then(russianRoulette)
  .catch((e) => {
    console.log(e.message, 'Sucker!');
  });
