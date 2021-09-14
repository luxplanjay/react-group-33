import { useState, useEffect } from 'react';
import { PlayerWrapper, StyledPlayer } from './Player.styled';

export const Player = ({ url }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const showLoader = url && !isVideoLoaded;
  const playerSize = isVideoLoaded ? '100%' : 0;

  useEffect(() => setIsVideoLoaded(false), [url]);

  return (
    <>
      {showLoader && <h2>Загружаем видео...</h2>}
      {url && (
        <PlayerWrapper>
          <StyledPlayer
            url={url}
            width={playerSize}
            height={playerSize}
            onReady={() => setIsVideoLoaded(true)}
            controls
          />
        </PlayerWrapper>
      )}
    </>
  );
};
