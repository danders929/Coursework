const myInstruments = ["flute","clarinet","saxaphone","trumpet","trombone"];
myInstruments.push("tuba","bassoon"); // adds tuba and basson at the end
myInstruments.splice(2,1); // selects and deletes saxaphone(index:2)
myInstruments.unshift("saxaphone"); // adds saxaphone at the beginning of array

function getFirstInstrument(instruments){ // returns first instrument in array
  firstItem =instruments[0];
  return firstItem;
};

function getLastInstrument(instruments){ // returns last instrument in array
  const lastItem = [myInstruments[myInstruments.length - 1]];
  return lastItem;
};

function getFirstAndLastInstrument(instruments){ // returns first and last instrument
  const lastAndEnd = [getFirstInstrument(Instruments),getLastInstrument(Instruments)];
  return lastAndEnd;
};

function getFirstThreeInstruments(instruments){
  const firstThree = myInstruments.slice(0,4);
  return firstThree;
};

function getTInstruments(instruments){// goes thru each instrument in myInstruments and 
  const tInstruments = [];
  for (i=0; i < instruments.length; i++){
    const instrument = instruments[i];
    if (instrument[0] === "t") {
      tInstruments.push(instrument);
    };
  };
  return tInstruments;
};

function getLongestInstrument(instruments){
  const longInstrument = [];
  maxLength = 0;
  for (i=0; i < instruments.length; i++){
    const instrument = instruments[i];
    console.log(instrument);
    iLength = instrument.length;
    console.log(iLength);
    if (iLength > maxLength){
      maxLength = iLength;
      console.log(maxLength);
    }
  }
  for (i=0; i < instruments.length; i++){
    const instrument = instruments[i];
    iLength = instrument.length;
    if (iLength === maxLength){
    longInstrument.push(instrument)
    }
  }
  return longInstrument;
}