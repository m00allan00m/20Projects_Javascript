let apiQuotes = []

async function getQuote() {
  //due to CORS policy unable to retrieve data from api
  //a proxy method is introduced to correct the error
  const proxyUrl = 'https://whispering-tor-04671.herokuapp.com/'
  const apiUrl =
    'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'

  try {
    const response = await fetch(proxyUrl + apiUrl)
    apiQuotes = await response.json()
    console.log(apiQuotes)
  } catch (error) {
    console.log(`No quotes retrieve response status 404`)
  }
}

//onload
getQuote()
