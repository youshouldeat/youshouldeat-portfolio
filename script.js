document.addEventListener('DOMContentLoaded', function() {
    const cassettePlayer = document.getElementById('cassette-player');

    const tapes = [
        { title: 'Demo 1', url: 'demo1.mp3' },
        { title: 'Demo 2', url: 'demo2.mp3' },
        { title: 'Demo 3', url: 'demo3.mp3' }
    ];

    tapes.forEach((tape, index) => {
        const button = document.createElement('button');
        button.textContent = tape.title;
        button.addEventListener('click', () => {
            playTape(tape.url);
        });
        cassettePlayer.appendChild(button);
    });

    function playTape(url) {
        const audio = new Audio(url);
        audio.play();
    }
});
