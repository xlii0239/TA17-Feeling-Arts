import React from 'react';
import ReactAplayer from 'react-aplayer';

export default class App extends React.Component {
    // event binding example
    onPlay = () => {
        console.log('on play');
    };

    onPause = () => {
        console.log('on pause');
    };

    // example of access aplayer instance
    onInit = ap => {
        this.ap = ap;
    };

    render() {
        const props = {
            audio: [
                {
                    name: '',
                    artist: '',
                    url: '',
                    cover: '.jpg',
                    theme: '#ebd0c2'
                }
            ]
        };

        return (
            <div>
                <ReactAplayer
                    {...props}
                    onInit={this.onInit}
                    onPlay={this.onPlay}
                    onPause={this.onPause}
                />
            </div>
        );
    }
}
