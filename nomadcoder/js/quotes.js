const quotes = [
  {
    quote: "명언1",
    author: "저자1",
  },
  {
    quote: "명언2",
    author: "저자2",
  },
  {
    quote: "명언3",
    author: "저자3",
  },
  {
    quote: "명언4",
    author: "저자4",
  },
  {
    quote: "명언5",
    author: "저자5",
  },
]

const quote = document.querySelector('#quote span:first-child');
const authors = document.querySelector('#quote span:last-child');

let randomNumber = function(len) {
  let res = parseInt(Math.random() * len);
  return res;
}

const curQuote = randomNumber(quotes.length);
quote.textContent = quotes[curQuote].quote;
authors.textContent = quotes[curQuote].author;