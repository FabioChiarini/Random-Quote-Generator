/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
// initilize array variable containing quote's object.
var quotes = [
  {quote: 'Our greatest glory is not in never falling, but in rising every time we fall', source: 'Confucius', tags: 'Spirituality'},
  {quote:'All our dreams can come true, if we have the courage to pursue them', source: 'Walt Disney', tags: 'Reaching goals'},
  {quote:'It does not matter how slowly you go as long as you do not stop', source: 'Confucius', tags: 'Reaching goals'},
  {quote:'Everything you’ve ever wanted is on the other side of fear', source: 'George Addair', tags: 'Reaching goals'},
  {quote:'Success is not final, failure is not fatal: it is the courage to continue that counts', source: 'Winston Churchill', tags: 'Reaching goals'},
  {quote:'When you think positive, good things happen', source: 'Matt Kemp', tags: 'Spirituality'},
  {quote:'I could do this all day', source: 'Captain America', citation: "Captain America: Civil War", year: 2016, tags: 'Movies'},
  {quote:'Why so serious?', source: 'The Joker', citation: "Batman: The Dark Knight", year: 2008, tags: 'Movies'}
];

// function that return a random quote from an array
function getRandomQuote (listOfQuotes) {

  // store a random number between 0 and the length of the array
  var randomNumber = Math.floor(Math.random() * listOfQuotes.length);
  console.log(randomNumber);

  //return the quote object associated with the generated random number
  return listOfQuotes[randomNumber];

}


// function used to display the quote
function printQuote () {

  // get the random quote object generated by getRandomQuote function
  var randomQuote = getRandomQuote(quotes);

  // create a string variable that contains the quote elements and displays it in html form
  var stringQuote = '';

  // write first part of random quote
  stringQuote += '<p class="quote">' + randomQuote.quote + '</p>';
  stringQuote += '<p class="source">' + randomQuote.source;

  // check if the key citation is in the object and, if so, attach it to the stringQuote
  if (randomQuote.citation){
    stringQuote += '<span class="citation">' + randomQuote.citation + '</span>';
  }

  // check if the key year is in the object and, if so, attach it to the stringQuote
  if (randomQuote.year){
    stringQuote += '<span class="year">' + randomQuote.year + '</span>';
  }

  // check if the key tags is in the object and, if so, attach it to the stringQuote
  if (randomQuote.tags){
    stringQuote += '<span class="tags">' + randomQuote.tags + '</span>';
  }



  stringQuote += '</p>';

  // target the div element with id quote-box to display the string generated
  var outputString = document.getElementById('quote-box');
  outputString.innerHTML = stringQuote;


}

/*
var changeQuoteTimeout =
function changeQuoteTimeout () {

}*/


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
