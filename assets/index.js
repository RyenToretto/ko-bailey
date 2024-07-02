document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const singer = document.getElementById('singer');

    audio.addEventListener('play', function() {
        singer.classList.add('singing');
    });

    audio.addEventListener('pause', function() {
        singer.classList.remove('singing');
    });

    audio.addEventListener('ended', function() {
        singer.classList.remove('singing');
    });
});
