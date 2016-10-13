var hello = new Vue({
    delimiters: ['${', '}'],
    el: '#hello',
    data: {
        msg: "Hello Silex - PHP Conference",
        peoples: [
            {name: "Michael Douglas Barbosa Araujo"},
            {name: "Levina Do Nascimento Passos"},
            {name: "Maria Silvania Barbosa"}
        ],
        newElement: '',
        elements: []
    },
    methods: {
        addElement: function() {
            var title = this.newElement.trim();
            if (title) {
                this.elements.push({title:title});
                this.newElement = "";
            }
        },
        removeElement: function(e, index) {
            e.preventDefault();
            this.elements.splice(index, 1);
        },
        myClick:function() {
            alert('Click');
        },
        myKeyUp: function() {
            alert('MyKeyUp');
        }
    }
});

var stream;

function hasUserMedia() {
    //check if the browser supports the WebRTC
    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia);
}

if (hasUserMedia()) {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia
        || navigator.mozGetUserMedia;

    //enabling video and audio channels
    navigator.getUserMedia({ video: true, audio: true }, function (s) {
        stream = s;
        var video = document.querySelector('video');

        //inserting our stream to the video tag
        video.src = window.URL.createObjectURL(stream);
    }, function (err) {});

} else {
    alert("WebRTC is not supported");
}

btnGetAudioTracks.addEventListener("click", function(){
    console.log("getAudioTracks");
    console.log(stream.getAudioTracks());
});

btnGetTrackById.addEventListener("click", function(){
    console.log("getTrackById");
    console.log(stream.getTrackById(stream.getAudioTracks()[0].id));
});

btnGetTracks.addEventListener("click", function(){
    console.log("getTracks()");
    console.log(stream.getTracks());
});

btnGetVideoTracks.addEventListener("click", function(){
    console.log("getVideoTracks()");
    console.log(stream.getVideoTracks());
});

btnRemoveAudioTrack.addEventListener("click", function(){
    console.log("removeAudioTrack()");
    stream.removeTrack(stream.getAudioTracks()[0]);
});

btnRemoveVideoTrack.addEventListener("click", function(){
    console.log("removeVideoTrack()");
    stream.removeTrack(stream.getVideoTracks()[0]);
});