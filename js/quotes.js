const quoteText = document.querySelector("#quote span:first-child");
const quoteAuthor = document.querySelector("#quote span:last-child");

async function getQuote() {
    const response = await fetch("https://type.fit/api/quotes")
        .then(response => response.json())

    const randomIndex = Math.floor(Math.random() * response.length);
    const quote = response[randomIndex];

    return quote;
}

async function printQuote() {
    const { text, author } = await getQuote();

    quoteText.innerText = text;
    quoteAuthor.innerText = author;
}

printQuote();