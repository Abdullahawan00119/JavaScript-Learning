const jokeBox = document.querySelector("#JokeBox");
const generateJoke = document.querySelector("#Generate");
jokeBox.innerHTML = ""
generateJoke.addEventListener("click", () => {
    const random = Math.floor(Math.random() * 200)
    const api = async () => {
        jokeBox.innerHTML = "Generating..."
        try {
            const response = await fetch(`https://api.freeapi.app/api/v1/public/randomjokes/${random}`);
            const jocks = await response.json();
            const data = jocks.data.content;
            jokeBox.innerHTML = data
        } catch (error) {
            console.log(error);

        }
    }
    api()
})
