const quotesArr = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote: "So many books, so little time.",
    author: "Frank Zappa",
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    quote: "A friend is someone who knows all about you and still loves you.",
    author: "Elbert Hubbard",
  },
  {
    quote: "Always forgive your enemies; nothing annoys them so much.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    quote: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "We accept the love we think we deserve.",
    author: "Stephen Chbosky",
  },
];

const quote = document.querySelector("footer #quote");
const author = document.querySelector("footer #author");

const randomQuote = quotesArr[parseInt(Math.random() * quotesArr.length)];

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;
