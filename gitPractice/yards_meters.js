function convertToMeters(yards){
  return yards * 0.9144;
}

function createMessage(yards, meters){
  let message = '';
  const numYards = yards * 1;
  
  if(numYards === 1760) {
    message = 'Thats as long as a mile!'
  } else if(numYards === 100) {
    message = 'Thats as long as a football field!';
  } else if(numYards === 26) {
    message = 'Thats as long as a tennis court!';
  } else if(numYards === 1) {
    message = 'Thats as long as a washing machine!';
  }

  return `${yards} yards is ${meters} meters. ${message}`;
}

function rand(limit){
  return Math.round(Math.random()*limit);
}

let inputYards = prompt('enter a number, we will convert that number from yards to meters');
let convertedMeters = convertToMeters(inputYards);
let output = createMessage(inputYards, convertedMeters);
console.log(output);

inputYards = prompt('Lets try again! enter a number, we will convert that number from yards to meters');
convertedMeters = convertToMeters(inputYards);
output = createMessage(inputYards, convertedMeters);
console.log(output);

let randomYards = rand(100); 
convertedMeters = convertToMeters(randomYards);
output = createMessage(randomYards, convertedMeters);
console.log(output);

randomYards = rand(100); 
convertedMeters = convertToMeters(randomYards);
output = createMessage(randomYards, convertedMeters);
console.log(output);