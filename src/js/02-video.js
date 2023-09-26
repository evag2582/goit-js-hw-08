import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

    let iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    const throttle = require('lodash.throttle');
    
    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    const onPlay = function(data) {
        const timeUpdate = data.seconds; 
        
    localStorage.setItem("videoplayer-current-time", timeUpdate);
 };
player.on('timeupdate', onPlay);
 
const timeUpdateRegister = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(timeUpdateRegister).then(function(seconds) {
    // seconds = the actual time that the player seeked to
    player.play();
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
