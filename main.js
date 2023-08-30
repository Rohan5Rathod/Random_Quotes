// console.log(document.querySelector("h1"))
// document.querySelector('h1').innerText = 'It is absolutely necessary to keep improving';

/*const quote = "It is absolutely necessary to keep improving"
document.querySelector('h1').innerText=quote;*/

const quotes = [
  "Because if you do not, you will remain stagnant",
  "In the midst of chaos, there is also opportunity",
  "Success is not final, failure is not fatal: It is the courage to continue that counts",
  "The only limit to our realization of tomorrow will be our doubts of today",
  "Believe you can and you're halfway there"
];
const title = document.querySelector('h1');
const button = document.querySelector('button');


button.addEventListener("click", changeQuote);

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function changeQuote() {
  const randomQuote = getRandomQuote();
  title.innerText = randomQuote;
}


// title.innerText = quote;