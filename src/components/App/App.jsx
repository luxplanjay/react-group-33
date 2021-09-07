import { Component } from 'react';
import { VideoList } from 'components/VideoList/VideoList';
import { Player } from 'components/Player/Player';
import videos from '../../videos.json';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    selectedVideo: null,
  };

  selectVideo = link => {
    this.setState({ selectedVideo: link });
  };

  render() {
    const { selectedVideo } = this.state;

    return (
      <Container>
        <h1>Selected video: {selectedVideo}</h1>
        <VideoList videos={videos} onSelect={this.selectVideo} />
        <Player url={selectedVideo} />
      </Container>
    );
  }
}
