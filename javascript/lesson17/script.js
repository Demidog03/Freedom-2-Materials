const searchInput = document.getElementById('searchInput')
const searchBtn = document.getElementById('searchBtn')
const mainVideo = document.getElementById('mainVideo')
const videoContainer = document.getElementById('videoContainer')
const recommendationContainer = document.getElementById('recommendationContainer')

searchBtn.addEventListener('click', () => {
    fetchVideo(searchInput.value)
})

async function fetchVideo(value) {
    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBErhWffkpnYC4ckDFSd7nUh-4ta6Sr1JI&q=${value}&type=video`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        const data = await response.json()
        console.log(data);

        const mainVideo = document.createElement('iframe')
        mainVideo.width = "560"
        mainVideo.height = "315"
        mainVideo.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        mainVideo.setAttribute('allowfullscreen', '')
        mainVideo.frameborder = "0"
        mainVideo.title = data.items[0].snippet.title
        mainVideo.src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`

        const recommendedVideos = data.items.slice(1).map(video => createRecommendedVideo(video))
        recommendationContainer.innerHTML = ""
        recommendationContainer.append(...recommendedVideos)
        
        videoContainer.innerHTML = ""
        videoContainer.appendChild(mainVideo)
    } catch (err) {
        console.error(err)
    }
}

function createRecommendedVideo(video) { // создание 1 iframe-а
    const recommendedVideo = document.createElement('iframe')
    recommendedVideo.width = "300"
    recommendedVideo.height = "180"
    recommendedVideo.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    recommendedVideo.setAttribute('allowfullscreen', '')
    recommendedVideo.frameborder = "0"
    recommendedVideo.title = video.snippet.title
    recommendedVideo.src = `https://www.youtube.com/embed/${video.id.videoId}`

    return recommendedVideo
}

