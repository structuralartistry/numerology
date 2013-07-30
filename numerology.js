// node numerology --'word'
//console.log(process.argv);
//console.log(process.argv.slice(2));

//console.log('Processing word: "' + process.argv.slice(2) + "'");

h = {};
h['a'] = 1;
h['b'] = 2;
h['c'] = 3;
h['d'] = 4;
h['e'] = 5;
h['f'] = 6;
h['g'] = 7;
h['h'] = 8;
h['i'] = 9;
h['j'] = 1;
h['k'] = 2;
h['l'] = 3;
h['m'] = 4;
h['n'] = 5;
h['o'] = 6;
h['p'] = 7;
h['q'] = 8;
h['r'] = 9;
h['s'] = 1;
h['t'] = 2;
h['u'] = 3;
h['v'] = 4;
h['w'] = 5;
h['x'] = 6;
h['y'] = 7;
h['z'] = 8;
h['0'] = 0;
h['1'] = 1;
h['2'] = 2;
h['3'] = 3;
h['4'] = 4;
h['5'] = 5;
h['6'] = 6;
h['7'] = 7;
h['8'] = 8;
h['9'] = 9;

var reducedNumber,
    processedNumbers,
    discardedCharacters;

function processData(data) {
  var splitData, returnData=[];
  splitData = data.split(/,/);
  if(splitData.length>1) {
    splitData.forEach( function(item) {
      item = item.trim();
      returnData.push(processWord(item));
    });

    returnData = specialProcessing(returnData);
    return returnData;
  } else {
    return processWord(data);
  }
}

function specialProcessing(returnData) {
  filtered = [];
  returnData.forEach(function(result) {
    console.log(result.word + ' ' + result.reducedNumber.toString() + ' ' + result.number.toString());
    //if(result.number==9 && result.reducedNumber!=27) filtered.push(result)
  });

  //filtered.forEach(function(result) {
  //  console.log(result.word + ' ' + result.reducedNumber.toString() + ' ' + result.number.toString());
  //});
}

function processWord(word) {
  reducedNumber=undefined;
  processedNumbers=[];
  discardedCharacters=[];
  return {word: word, number: wordToNumber(word), reducedNumber: reducedNumber, processedNumbers: processedNumbers.join(''),
          discardedCharacters: discardedCharacters};
}

function wordToNumber(word) {
  var outputNumber = 0,
      characterNumber;
  word = word.toLowerCase();
  for(var i=0; i<word.length; i++) {
    characterNumber = h[word[i]];
    if(characterNumber) {
      processedNumbers.push(characterNumber);
      outputNumber += characterNumber;
    } else {
      discardedCharacters.push(word[i]);
    }
  }
  return reduce(outputNumber);
}

function reduce(number) {
  if(number.toString().length>1) {
    reducedNumber=number;
    return wordToNumber(number.toString());
  } else {
    return number;
  }
}

//console.log( processData(process.argv[2]) );
