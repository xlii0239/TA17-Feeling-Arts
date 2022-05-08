import React from 'react';
import YouTube from 'react-youtube';

class MusicInfo extends React.Component {
    videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.playVideoAt()
        console.log(event.target)
    }
    videoOnPlay(event) {
        const player = event.target
        console.log(player.getCurrentTime())
    }
    videoStateChange(event) {
        console.log(event)
    }
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 0
            }
        }
        const { videoId } = this.props
        return (
            <YouTube
                videoId={videoId}
                opts={opts}
                onReady={this.videoOnReady}
                onPlay={this.videoOnPlay}
                onStateChange={this.videoStateChange}
            />
        )
    }
}

export default MusicInfo;