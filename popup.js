const timeInput = document.getElementById("inputMinutos");
const btnPlay = document.getElementById("btnPlay");

let time = 0;

btnPlay.addEventListener("click", ()=>{
    time = timeInput.value;
    if(time != "" && time != 0)
     enviarMensagem({time})
})

function enviarMensagem(menssagem){
    chrome.tabs.query({active:true, currentWindow:true}, (tabs)=>{
        chrome.tabs.sendMessage(tabs[0].id, menssagem, (res)=>{

        })
    })
}