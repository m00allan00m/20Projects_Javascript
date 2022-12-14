// 'https://jacintodesign.github.io/quotes-api/data/quotes.json'

//get data from api

let apiQuotes = []

const text = document.querySelector('span.quote-text')
const author = document.querySelector('span.author')
const buttonNewQuotes = document.querySelector('button.new-quote')
const buttonTwitter = document.querySelector('button.twitter-button')
let loader = document.getElementById('loader')
let quoteContainer = document.getElementById('quote-container')

function tweetQuote() {
  const tweetThisQuote = `https://twitter.com/intent/tweet?text=${text.textContent} - ${author.textContent}`
  window.open(tweetThisQuote, '_blank')
}

function newQuotes() {
  //loading spinner
  showLoadingSpinner()
  //Get randomised quotes
  const quotes = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]

  //Grab text from api and push to htmltag to display
  text.innerText = quotes.text
  author.innerText = quotes.author

  //Using css to reduce font size when text content is larger than 80 chars
  if (quotes.text.length > 80) {
    text.classList.add('long-quote')
  } else {
    text.classList.remove('long-quote')
  }

  if (!quotes.author) {
    author.innerText = 'Unknown'
  }
  removeLoadingSpinner()
}

function showLoadingSpinner() {
  loader.hidden = false
  quoteContainer.hidden = true
}

function removeLoadingSpinner() {
  loader.hidden = true
  quoteContainer.hidden = false
}

//Async function get data from Api
async function getQuotes() {
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
  try {
    loading()
    const response = await fetch(apiUrl)
    apiQuotes = await response.json()
    complete()
  } catch {}
}

buttonNewQuotes.addEventListener('click', newQuotes)
buttonTwitter.addEventListener('click', tweetQuote)

getQuotes()

//loading
// loading()
