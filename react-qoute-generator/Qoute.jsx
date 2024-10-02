import React, { useState } from 'react';

const quotes = [
  {
    text: "1. It is not death that a man should fear, but he should fear never Beginning to live.",
    author: "Aurelius"
  },
  {
    text: "2. Waste no more time Arguing about what a good man should be. Be one.",
    author: "Aurelius"
  },
  {
    text: "3. The best revenge is to be unlike him who performed the injury.",
    author: "Aurelius"
  },
  {
    text: "4. If it is not right, do not do it; if it is not true, do not say it",
    author: "Aurelius"
  },
  {
    text: "5. The happiness of your life depends upon the quality of your thoughts.",
    author: "Aurelius"
  },
  {
    text: "1. not how long it is, but how good it is, is what matters.",
    author: "Seneca"
  },
  {
    text: "2. If a man knows not to which port he sails, no wind is favorable.",
    author: "Seneca"
  },
  {
    text: "3. Hang on to your youthful enthusiasms -- you'll be able to use them better when you're older.",
    author: "Seneca"
  },
  {
    text: "4. We suffer more often in imagination than in reality.",
    author: "Seneca"
  },
  {
    text: "5. Luck is what happens when preparation meets opportunity.",
    author: "Seneca"
  }
];

function QuoteGenerator() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAuthorClick = (author) => {
    if (author === "Aurelius") {
      const aureliusQuotes = quotes.filter((quote) => quote.author === author);
      const nextIndex = aureliusQuotes.indexOf(quotes[currentIndex]) + 1;
      if (nextIndex >= aureliusQuotes.length) {
        nextIndex = 0;
      }
      setCurrentIndex(quotes.indexOf(aureliusQuotes[nextIndex]));
    } else if (author === "Seneca") {
      const senecaQuotes = quotes.filter((quote) => quote.author === author);
      const randomQuoteIndex = Math.floor(Math.random() * senecaQuotes.length);
      setCurrentIndex(quotes.indexOf(senecaQuotes[randomQuoteIndex]));
    }
  };

  const authors = [...new Set(quotes.map((quote) => quote.author))];

  return (
    <div className="quote-generator">
      <div className="quote-container">
        <center><h2>Quotes</h2></center>
        <div className="quote-box">
          <center><p className="quote-text">{quotes[currentIndex].text}</p></center>
          <center><p className="quote-author">- {quotes[currentIndex].author}</p></center>
        </div>
        <div className="button-container">
          {authors.map((author, index) => (
            <button key={index} className="author-btn" onClick={() => handleAuthorClick(author)}>
              {author}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuoteGenerator;