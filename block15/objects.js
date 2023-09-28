const dinner = {
  cheeseBurger: 12,
  steak: 20,
  soup: 80,
  macAndCheese: 14,
  soupAndSalad: 16,
}
const dinKeys = Object.keys(dinner);
console.log(dinKeys);
const dinValues = Object.values(dinner);
console.log(dinValues);
function dinTotal(dinners){
  let sum = 0;
  for (let i = 0; i<dinValues.length; i++){
    sum += dinValues[i];
    console.log(dinKeys[i].toUpperCase() + " $" + dinValues[i]);
  }
  return sum;
}
console.table(dinner);
console.log("The total of the dinners is $" + dinTotal(dinner));