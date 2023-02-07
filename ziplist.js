const letter = ['a', 'b', 'c'];
const number = [1, 2, 3];
function zipList(list1, list2) {
  const array = [];
  for (let i = 0; i < list1.length; i++) {
    array.push(list1[i], list2[i]);
  }
  return array;
}

console.log(zipList(letter, number));

function zipListSimpleWay(list1, list2) {
  return _.flatten(list1, list2);
}

console.log(zipListSimpleWay(letter, number));
