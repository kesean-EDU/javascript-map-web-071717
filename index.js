function map(collection, callback) {
  let newCollection = [];

  for (let i = 0; i < collection.length; i++) {
    const element = collection[i];
    result.push(callback(element, i, collection));
  }
  return newCollection;
}

const numbers = [1, 2, 3];
const doubledNumbers = map(numbers, function(number){
  return number * 2;
});

const autobots = [
  { name: 'Optimus Prime', strength: 5, isTransformed: false, },
  { name: 'Ironhide', strength: 3, isTransformed: false, },
  { name: 'Bumblebee', strength: 2.5, isTransformed: false, },
  { name: 'Ratchet', strength: 1.5, isTransformed: false, },
];

const transformedAutobots = map(autobots, function (autobot) {
  return Object.assign({}, autobot, {
    strength: autobot.strength * 2,
    isTransformed: true,
  });
});
