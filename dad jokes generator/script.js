const btnEL = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

btnEL.addEventListener("click", getJoke);

const apiKey = "SfcHuphIR76qT272H8AEog==8LUAPeQmKVI6baFr";

const options = {
    method: "GET", /* becuase we're requesting for the data*/
    headers: { /* */
        "X-Api-Key": apiKey,
    },
};
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){

    try { /* tool used in case there is any error */
     
        jokeEl.innerText = "Updating..."; /* this text will be shown while the joke is loading */
        btnEL.disabled = true; /* disable the btn while it's loading */
        btnEL.innerText = "Loading..."; /* text shown on the btn while the joke is loading  */

        const response = await fetch(apiUrl, options); /* i've added "await" because we need to wait for the response before it change to json  */
        const data = await response.json()/* convert the data to JSON*/
        
        btnEL.disabled = false; /* make the button work again */
        btnEL.innerText = "Tell me a joke";

        console.log(data[0]); /* allow us too see the joke in the console */
        jokeEl.innerText = data[0].joke; /* innerText is used to change the text we've targeted (here it's jokeEl) */ 
        /* the ".joke" is used here to be able to see the joke as a text without bracket */
        
    }catch (error) {
        jokerEL.innerText = "An error happened, try again later"
        btnEL.disabled = false;
        btnEL.innerText = "Tell me a joke"; /* bring back the button to its former text */

        console.log(error);
    }

}
