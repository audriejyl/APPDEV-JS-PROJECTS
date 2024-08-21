const quotes = [
    "Be yourself; everyone else is already taken.",
    "Never let the fear of striking out keep you from playing the game.",
    "Don't settle for what life gives you; make life better and build something.",
    "If you want to live a happy life, tie it to a goal, not to people or things.",
    "You don't have to be great to start, but you have to start to be great.",
    "Life isn't about finding yourself. Life is about creating yourself."
];

const colors = [
    "#FF6347",
    "#4682B4", 
    "#32CD32",
    "#FFD700",
    "#6A5ACD",
    "#FF69B4"
];

const btn = document.getElementById("btn");
const quoteElement = document.getElementById("quote");

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

btn.addEventListener("click", () => {
    const randomQuote = getRandomQuote();
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    quoteElement.textContent = randomQuote;
});

document.body.style.backgroundColor = getRandomColor();
quoteElement.textContent = getRandomQuote();