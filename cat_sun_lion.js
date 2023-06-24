// Retrieve the DOM elements
let lyricsDiv = document.getElementById('lyrics');
let audioElement = document.querySelector('audio');

// Define the lyrics for the 'The Beat Goes On'
let lyrics = [
    'Round and round and round we go',
    'And the beat goes on and on',
    'Time can be the friend or the foe',
    'And the beat goes on and on',
    'Let it roll out of control',
    'And the beat goes on and on',
    'Though the world is losing its soul',
    'The beat goes on and on',
    'You feel it in your heart',
    'You hear it in the sound',
    'You know you can't ignore it',
    'The beat goes on and on',
    'You can see it everywhere',
    'It's in the rhythm of the air',
    'But you know that it won't break',
    'The beat goes on and on',
    'A way to reach for the future',
    'And the beat goes on and on',
    'We try to live our lives for sure',
    'And the beat goes on and on',
    'The days are filled with smiles and tears',
    'And the beat goes on and on',
    'Though danger may come and go',
    'The beat goes on and on',
    'We can't turn back the hands of time',
    'The beat goes on and on',
    'Though you face the darkest night',
    'You feel the passion in the light',
    'You know you can't ignore it',
    'The beat goes on and on',
    'Though the forces of evil may try',
    'The beat goes on and on',
    'With all that we can give or take',
    'And the beat goes on and on',
    'Breaking through the fear and doubt',
    'The beat goes on and on',
    'It's the music of life without.',
    'The beat goes on and on'
];

// Create a new audio element to play the song
let audioSource = document.createElement('source');
audioSource.setAttribute('src', 'audio/the-beat-goes-on.mp3');
audioElement.appendChild(audioSource);

// Create a function to display the lyrics
let displayLyrics = () => {
    for (let i = 0; i < lyrics.length; i++) {
        let line = document.createElement('p');
        line.innerText = lyrics[i];
        lyricsDiv.appendChild(line);
    }
};

// Call the displayLyrics function
displayLyrics();

// Play the song
audioElement.play();