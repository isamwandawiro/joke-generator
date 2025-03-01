// Function to display the joke
function displayJoke(response) {
  let joke = response.data.answer;
  new Typewriter("#joke", {
    strings: joke,
    autoStart: true,
    delay: 100,
  });
}

// Function to generate the joke
function jokeGenerator() {
  let joke = document.querySelector("#joke");
  joke.innerHTML = "Generating joke, please wait a minute...";

  let apiKey = "103e0470750babf36f99e08ddo7f31ta";
  let context = "Be precise and give a detailed answer";
  let prompt = "Tell me the funniest joke";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayJoke);
}

// Adding event listener to the button
let buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", jokeGenerator);
