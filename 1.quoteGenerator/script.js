// 'https://jacintodesign.github.io/quotes-api/data/quotes.json'

//get data from api

let apiQuotes = []

const text = document.querySelector('span.quote-text')
const author = document.querySelector('span.author')
const buttonNewQuotes = document.querySelector('button.new-quote')

function newQuotes() {
  const randomQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  text.innerText = randomQuote.text
  author.innerText = randomQuote.author
}

async function getQuotes() {
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
  try {
    const response = await fetch(apiUrl)
    apiQuotes = await response.json()
  } catch {}
}

buttonNewQuotes.addEventListener('click', () => {
  newQuotes()
})

getQuotes()
