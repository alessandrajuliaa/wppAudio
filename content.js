const audios = document.querySelectorAll("audio")
const videos = document.querySelectorAll("video")

let tmp = 0

chrome.runtime.onMessage.addListener((request,sender,sendResponse)=>{
    tmp = request.time
    if(audios != "" && audios != null){
        for(audio of audios){audio.playbackRate = tmp}
    }
    if(videos != "" && videos != null){
        for(video of videos){video.playbackRate = tmp}
    }
    sendResponse(true);
})