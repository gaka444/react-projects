import React from 'react';
import ReactPlayer from 'react-player';
function Player(props) {
    return (
        <div>
            <ReactPlayer width='400px' height='200px' controls url='https://www.youtube.com/watch?v=7sDY4m8KNLc&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM&index=12'
            onStart={() => console.log("Video started playing")}
            onReady={() => console.log("Video is ready to be played")}
            onPause={() => console.log("Video is paused")}
            onEnded={() => console.log("Video has ended")}
            onError={() => console.log("Video Error")} />
        </div>
    );
}

export default Player;