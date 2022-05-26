const recordBtn = document.getElementById("record")
const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
let api;

const ROOM_NAME = ""
const JWT_TOKEN = ""

startBtn.addEventListener('click', () => {
    api = new JitsiMeetExternalAPI("8x8.vc", {
        roomName: ROOM_NAME,
        parentNode: document.querySelector('#jaas-container'),
        configOverwrite: {
            liveStreamingEnabled: true,
        },
        jwt: JWT_TOKEN
    });
    
})

stopBtn.addEventListener('click', () => {
    api.executeCommand('hangup')
})



recordBtn.addEventListener('click', () => {
     api.executeCommand('startRecording', {
            mode: 'stream',
            shouldShare: true,
            rtmpBroadcastID: "<RTMP_URL>" + "<RTMP_STREAM_KEY>", // Get the url and key from vimeo live event
            youtubeStreamKey: "<RTMP_URL>" + "<RTMP_STREAM_KEY>" // Get the url and key from vimeo live event
        });
})

