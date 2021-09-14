import { Component } from 'react';
import { PageContainer } from 'components/PageContainer/PageContainer';
import { VideoList } from 'components/VideoList/VideoList';
import { Player } from 'components/Player/Player';
import videos from '../videos.json';

export class Example1 extends Component {
  state = {
    selectedVideo: null,
  };

  selectVideo = link => {
    this.setState({ selectedVideo: link });
  };

  render() {
    const { selectedVideo } = this.state;

    return (
      <PageContainer>
        <h1>Selected video: {selectedVideo}</h1>
        <VideoList videos={videos} onSelect={this.selectVideo} />
        <Player url={selectedVideo} />
      </PageContainer>
    );
  }
}
