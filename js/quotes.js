import axios from "axios";

async function getQuote() {
    const response = await axios({
        method: 'GET',
        url: "https://api.adviceslip.com/advice"
    });

    console.log(response.data);
}

getQuote();