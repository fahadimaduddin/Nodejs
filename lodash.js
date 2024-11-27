import _ from 'lodash';

const array = [1, 2, 3, 4, 5];
const shuffledArray = _.shuffle(array);
console.log('Shuffled Array:', shuffledArray);

const object = { a: 1, b: 2, c: 3 };
const invertedObject = _.invert(object);
console.log('Inverted Object:', invertedObject);
