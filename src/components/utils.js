function randomNumber(faces) {
  return Math.floor(Math.random() * faces) + 1;
}

function arrayDice(numZaruri, faces) {
  // let array = [];
  // for (let i = 0; i < numZaruri; i++) {
  //   array.push(randomNumber(faces));
  // }

  let array = Array.from({ length: numZaruri }, () => randomNumber(faces));

  return array;
}

function add(array) {
  // let sum = 0;
  // for (let i = 0; i < array.length; i++) {
  //   sum += array[i];
  // }

  const sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return sum;
}

export { randomNumber, arrayDice, add };
