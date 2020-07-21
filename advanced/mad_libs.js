//input a template
//output - the template with all of the parts of speech replaced by random words
//         from a list, returned as a string

//data type
//a string with fill in the blanks represented by symbols
//verbs = $v
//adjectives = $adj
//nouns = $n
//adverbs = $adv

//object with keys as parts of speech and values as an array of words
//{verbs: [], nouns: [], adjectives: [], adverbs: []}

//algorithm
//initlalize object of random words
//separate template into array of words
//iterate through template words array
//if word is part of speech ($) then
//  splice a random word from the random words object part of speech array
//  set element from template words to random word
//join template words and return string

function madLibs(template) {
  let randomWords = {
    nouns: ["ball", "bird", "drum", "coin"],
    verbs: ["eats", "shoots", "leaves", "joins"],
    adjectives: ["pretty", "slimy", "delicate", "blue"],
    adverbs: ["slowly", "noisily", "daintily", "purposefully"]
  };

  let getRandomWord = function (placeHolder) {
    let list = randomWords[partOfSpeech(placeHolder)];
    let wordNum = Math.floor(Math.random() * (list.length - 1));

    return list.splice(wordNum, 1)[0];
  };

  let templateWords = template.split(/( |\.)/g);
  let regex = new RegExp(/\$(n|v|adj|adv)/);

  return templateWords.map(word => {
    if (word === " ") return word;
    
    let placeHolder = word.match(regex);

    if (placeHolder !== null) {
      return getRandomWord(placeHolder[1]);
    } else {
      return word;
    }
  }).join('');
}

function partOfSpeech(abbreviated) {
  switch (abbreviated) {
    case 'n': return 'nouns';
    case 'v': return 'verbs';
    case 'adj': return 'adjectives';
    case 'adv': return 'adverbs';
  }
}

let template1 = "The $n $v the $adj berries $adv."
let template2 = "She $v the $adj $n.  The $n $v $adv. What a $adj $n."

console.log(madLibs(template1));
console.log(madLibs(template2));
