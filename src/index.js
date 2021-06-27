// in case the api doesn't work
// const quotes = [
//   'Technology is best when it brings people together. - Matt Mullenweg',
//   'The art challenges the technology, and the technology inspires the art. - John Lasseter',
//   'Everything is designed. But few things are designed well. - Brain Reed',
//   'Humanity is acquiring all the right technology for all the wrong reasons. - Buckminster Fuller',
//   'The web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past. - Tim Berners-Lee',
//   'Maybe we need less real stupidity and more artificial intelligence. - Rammy Nasser',
//   'All this modern technology just makes people try to do everything at once. - Bill Watterson',
//   'Anyone who keeps learning stays young. - Henry Ford',
//   'Innovation distinguishes between a leader and a follower - Steve Jobs',
//   'Technology is a useful servant but a dangerous master - Christian Lous Lange',
// ];

const randomQuote = () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  console.log(quote);
};

module.exports = { randomQuote };
