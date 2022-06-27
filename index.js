// Váriavel com tag audio
let music = $("audio")[0]

let cover = $("img")[0]

let musicName = $(".description h2")[0]
let artistName = $(".description i")[0]

let index = 0

renderMusic(index)

music.addEventListener("timeupdate", updateBar)

let musicDuration = $(".end")[0];

music.addEventListener("loadeddata", duration)
function duration() {
    musicDuration.textContent = secondsForMinutes(Math.floor(music.duration))
}

// Botão de Play
$(".btn-play").click(() => {
    music.play()
    console.log(`Playing ${musics[index].title}`)

    $(".btn-pause")[0].style.display = "block";
    $(".btn-play")[0].style.display = "none"
})

// Botão de Pause
$(".btn-pause").click(() => {
    music.pause()
    console.log("Music Stopped")

    $(".btn-pause")[0].style.display = "none";
    $(".btn-play")[0].style.display = "block"
})

$(".back").click(() => {
    index--
    if (index < 0) {
        index = musics.length
    }
    renderMusic(index)
    music.play()

    $(".btn-play")[0].style.display = "none";
    $(".btn-pause")[0].style.display = "block"

    console.log(`Playing ${musics[index].title}`)
})

$(".next").click(() => {
    index++
    if (index > musics.length) {
        index = 0
    }
    renderMusic(index)
    music.play()

    $(".btn-play")[0].style.display = "none";
    $(".btn-pause")[0].style.display = "block"

    console.log(`Playing ${musics[index].title}`)
})


function renderMusic(index) {
    music.setAttribute('src', musics[index].src);
    music.addEventListener("loadeddata", () => {
        musicName.textContent = musics[index].title;
        artistName.textContent = musics[index].artist;
        cover.src = musics[index].img;
        musicDuration.textContent = secondsForMinutes(Math.floor(music.duration));
    })
}


function updateBar() {
    let bar = $("progress")[0];
    bar.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';

    let timeCurrent = $(".init")[0];
    timeCurrent.textContent = secondsForMinutes(Math.floor(music.currentTime))
}

function secondsForMinutes(seconds) {
    let minuteCamp = Math.floor(seconds / 60);
    let secondCamp = seconds % 60;

    if (minuteCamp < 10) {
        minuteCamp = "0" + minuteCamp;
    }
    if (secondCamp < 10) {
        secondCamp = "0" + secondCamp;
    }

    return minuteCamp + ":" + secondCamp;
}

$(".btn-light").click(() => {

    $("svg")[0].style.fill = "black";
    $("svg")[1].style.fill = "black";
    $("svg")[2].style.fill = "black";
    $("svg")[3].style.fill = "black"

    $("body")[0].style.color = "black"
    $("body")[0].style.backgroundColor = "#d3d3d3"
    $("html")[0].style.backgroundColor = "#d3d3d3"

    $(".container")[0].style.backgroundColor = "white"

    $(".bar")[0].style.border = "1px solid black"

    $("progress")[0].style.backgroundColor = "black"

    $(".point")[0].style.backgroundColor = "black"

    $(".btn-light").hide()
    $(".btn-dark").show()
})

$(".btn-dark").click(() => {

    $("svg")[0].style.fill = "white";
    $("svg")[1].style.fill = "white";
    $("svg")[2].style.fill = "white";
    $("svg")[3].style.fill = "white"

    $("body")[0].style.color = "#ddd"
    $("body")[0].style.backgroundColor = "black"
    $("html")[0].style.backgroundColor = "black"

    $(".container")[0].style.backgroundColor = "#333"

    $(".bar")[0].style.border = "1px solid #eee"

    $("progress")[0].style.backgroundColor = "#333"

    $(".point")[0].style.backgroundColor = "#eee"

    $(".btn-light").show()
    $(".btn-dark").hide()
})