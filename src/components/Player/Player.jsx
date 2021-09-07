import { Component } from 'react';
import { PlayerWrapper, StyledPlayer } from './Player.styled';

export class Player extends Component {
  state = {
    isVideoLoaded: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({ isVideoLoaded: false });
    }
  }

  render() {
    const { isVideoLoaded } = this.state;
    const { url } = this.props;
    const showLoader = url && !isVideoLoaded;
    const playerWidth = isVideoLoaded ? '100%' : 0;
    const playerHeight = isVideoLoaded ? '100%' : 0;

    return (
      <>
        {showLoader && <h2>Загружаем видео...</h2>}
        {url && (
          <PlayerWrapper>
            <StyledPlayer
              url={url}
              width={playerWidth}
              height={playerHeight}
              onReady={() =>
                this.setState({
                  isVideoLoaded: true,
                })
              }
              controls
            />
          </PlayerWrapper>
        )}
      </>
    );
  }
}
