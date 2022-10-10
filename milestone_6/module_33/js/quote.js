
const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(resp => resp.json())
    .then(data => displayQuote(data))
}

const displayQuote = (data) => {
    const quoteArea = document.getElementById('quote');
    quoteArea.innerText = data.quote;
    // const newQuote = document.createElement('p');
    // newQuote.innerText = data.quote;
    // quoteArea.appendChild(newQuote);
    console.log(data.quote);
};

