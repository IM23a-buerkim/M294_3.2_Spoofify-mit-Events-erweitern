function show_name(track) {
    if (track.innerText === '') {
        let track12 = document.getElementById(track);
        if (track === track1) {
            track.innerHTML = '<div onclick="playlist(`Back in Black`)">Back in Black</div>' +
                '<div onclick="playlist(`Highway to Hell`)">Highway to Hell</div>' +
                '<div onclick="playlist(`Thunderstruck`)">Thunderstruck</div>' +
                '<div onclick="playlist(`T.N.T.`)">T.N.T.</div>' +
                '<div onclick="playlist(`Hells Bells`)">Hells Bells</div>' +
                '<div onclick="playlist(`You Shook Me All Night Long`)">You Shook Me All Night Long</div>';

        } else if (track === track2) {
            track.innerHTML = '<div>Bohemian Rhapsody</div>' +
                '<div onclick="playlist(`Don\'t Stop Me Now`)">Don\'t Stop Me Now</div>' +
                '<div onclick="playlist(`We Will Rock You`)">We Will Rock You</div>' +
                '<div onclick="playlist(`Somebody to Love`)">Somebody to Love</div>' +
                '<div onclick="playlist(`We Are the Champions`)">We Are the Champions</div>' +
                '<div onclick="playlist(`Another One Bites the Dust`)">Another One Bites the Dust</div>';


        } else {
            track.innerHTML = '<div onclick="playlist(`Track 1`)">Track 1</div>' +
                '<div onclick="playlist(`Track 2`)">Track 2</div>' +
                '<div onclick="playlist(`Track 3`)">Track 3</div>' +
                '<div onclick="playlist(`Track 4`)">Track 4</div>' +
                '<div onclick="playlist(`Track 5`)">Track 5</div>' +
                '<div onclick="playlist(`Track 6`)">Track 6</div>';

        }
    } else {
        track.innerText = '';
    }
}

function playlist(track) {
    let x = document.getElementById('Player');
    x.innerText = track;
}

function reloadImage() {
    let img = document.getElementsByClassName('imgg');
    // Bild neu laden, indem wir einen Zufallsparameter anhängen, um den Cache zu umgehen
    img.src = 'image.jpg?' + new Date().getTime();
}