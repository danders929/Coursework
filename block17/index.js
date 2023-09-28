// STEP 1: make the blueprint
// class <Var> {} *capitalize first letter of variable name*

class Sentence {
  //constructor
  constructor(data) {
    this.data = data;
  } 
  //method names Syntax* functionName() {}
  wordCount() {
    return this.data.split(' ').length;
  }
  hasLetter(letter){
    return this.data.indexOf(letter) !== -1; // searches the sentence as an array and checks if the result is anything other than undefined. 
  }
  letterCount(letter){
    let letterCount = 0;
    for(let i = 0; i < this.data.length; i++){
      if(letter === this.data[i]){
        letterCount += 1;
      }
    }
    return letterCount;
  }
  //TODO return an object with a key for each word in ${this.data}, and a value for how many times the key appears in the sentence.
  stats(){
    let newObj = {};
    const sentArray = this.data.split(' ');
    sentArray.forEach(word => {
      const wordArray = sentArray.filter(element => element === word);
      newObj[word] = wordArray.length;
    });
    return newObj;
  }
}

const userPrompt = prompt("Enter some data:", "some random words that I made up and some other words");
// STEP 2: use the blueprint
const userSentence = new Sentence(userPrompt);
console.log("The total word count is : " + userSentence.wordCount());
console.log(userSentence.hasLetter('r'));
console.log("There are a total of " + userSentence.letterCount('s') + " letter 'S' in the sentence");
console.table(userSentence.stats());


