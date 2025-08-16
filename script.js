
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authoText = document.getElementById('author');
const twitterBtn = document.getElementById('x-button');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');




//Asunc =>start something now and finsh it later
let apiQuotes = [];
//show new quotes
function newQuotes() {
    showLoadingSpinner();
    //pick a random number
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //check if author field none 
    if (!quote.author) {
        authoText.textContent = 'unknown';

    }else{
    authoText.textContent = quote.author;

    }
    //check the code length to determine the styling
    if(quote.text.length > 80){
        quoteText.classList.add('long-text');
    }else{
      quoteText.classList.remove('long-text');

    }
    //set quote,hide loader
    quoteText.textContent = quote.text;
    removeLoadingSpinner();

}

//show loading
function showLoadingSpinner(){
    loader.hidden=false;
    quoteContainer.hidden=true;
}
//hide loading
function removeLoadingSpinner(){
    quoteContainer.hidden=false;
    loader.hidden=true;
}


async function getQuotes() {
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
   showLoadingSpinner();
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuotes();
    } catch (error) {
console.log(error);
    }
}
//tweet quote
function tweetQuote(){
    const twitterURL=`https://twitter.com/intent/tweet?text
=${quoteText.textContent} - ${authoText.textContent}`;
window.open(twitterURL,'_blank');
}
//Event listeners
newQuoteBtn.addEventListener('click',newQuotes);
twitterBtn.addEventListener('click',tweetQuote);
//on load
getQuotes();
// loading();
// function newQuotes(){
//     //pick a random number
//     const quote=localQuotes[Math.floor(Math.random() * localQuotes.length)];
//     console.log(quote);
// }
// newQuotes();