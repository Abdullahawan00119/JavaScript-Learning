const video = document.querySelector("#video");
const next = document.querySelector("#next");
const Loading = document.querySelector("#loading");
const videoApi = async () => {
    try {
       Loading.classList.remove("hidden")
        const response = await fetch('https://api.freeapi.app/api/v1/public/youtube/videos');
        const apiData = await response.json();
       Loading.classList.add("hidden")

        const data = apiData.data.data
        let number = 0
        let dataID = data[number].items.id
        video.src = "https://www.youtube.com/embed/" + dataID;
        next.addEventListener("click", () => {
            number += 1
            if (number >= 9) {
                number = 0
            }
            dataID = data[number].items.id
            video.src = "https://www.youtube.com/embed/" + dataID;
        })
    } catch (error) {
        console.log(error);
    }
}

videoApi()
