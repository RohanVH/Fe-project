// window.addEventListener('click', function() {
//     const audioElement = document.getElementById('welcomeAudio');
    
//     if (audioElement.paused) {
//         audioElement.src = 'Audio/welcome-english.mp3';
//         audioElement.play().catch(function(error) {
//             console.log('Audio playback error:', error);
//         });
//     }
// }, { once: true });


window.addEventListener('load', function() {
    // Get the audio element
    const audioElement = document.getElementById('welcomeAudio');

    // Set the audio source
    audioElement.src = './Audio/intro.mp3';
    
    // Attempt to play the audio muted first to bypass restrictions
    audioElement.muted = true;
    audioElement.play().then(() => {
        // After it starts playing, unmute it
        audioElement.muted = false;
    }).catch(function(error) {
        console.log('Audio playback error:', error);
    });
});
