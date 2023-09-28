const items = [
  { id: 1, name: 'foo', price: 7 },
  { id: 2, name: 'bar', price: 6 },
  { id: 3, name: 'bazz', price: 9 },
  { id: 3, name: 'quq', price: 13 }
];

const name = prompt("Please enter the name of the item you are trying to find:", "foo");

const found = items.find((item) => {
  return item.name === name;
})

if (found){
  console.log("Your item was found");
  console.log(found);
  } 
  else {
    console.log("Your item was not found");
}

const search = prompt("Please enter a string of text:", "oo");

const foundItems = items.filter(item => item.name.indexOf(search) !== -1);
console.log(foundItems);

const keyForMapping = prompt("Choose a key: ID, Name, or price so we can display the values associated with it", "price");

const mappedValues = items.map(item => item[keyForMapping] );
console.log("mapped values:", mappedValues);

const keyForReducing = prompt("Choose a key, either id, or price so we can reduce to sum up the values for that key","price");

const reduction = items.reduce((acc, curr) => acc + curr[keyForReducing], 0)
console.log(reduction);

