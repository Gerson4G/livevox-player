import React, {useEffect} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward, faBackward, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

const ButtonsContainer = styled.div`
    color: black;
    align-self: center;
    cursor: pointer;

    svg {
      margin: 0 2px;
      font-size: 30pt;
    }

    .play {
      font-size: 26pt;
      vertical-algin: sub;
    }

    .fa-forward {
      ${({isLastTrack}) => isLastTrack && 'cursor: not-allowed;'}
    }
    .fa-backward {
      ${({isFirstTrack}) => isFirstTrack && 'cursor: not-allowed;'}
    }
`;

const Buttons = (props) => {
    const {selectedTrack, selectTrack, tracksLength, isPlaying, start, currentTime, setTime, duration} = props;

    const changeTrack = (dir) => {
        if(dir === 'next' && selectedTrack < tracksLength - 1){
            selectTrack(selectedTrack + 1);
        }
        else if(dir === 'prev' && selectedTrack > 0){
            selectTrack(selectedTrack + -1);
        }
    }

    useEffect(() => {
        let timer = null;
        if(isPlaying && currentTime >= duration && selectedTrack < tracksLength - 1){
          setTime(0);
          selectTrack(selectedTrack+1);
        }
        else if(isPlaying && currentTime >= duration && selectedTrack === tracksLength - 1){
          setTime(0);
          clearInterval(timer);
          start(false);
        }
        else if (isPlaying) {
          timer = setInterval(() => {
            setTime(currentTime => currentTime + 1);
          }, 1000);
        }
        else if (!isPlaying && currentTime !== 0) {
          clearInterval(timer);
        }
        return () => clearInterval(timer);
      }, [isPlaying, currentTime]);
      

    return(
        <ButtonsContainer isFirstTrack={selectedTrack === 0} isLastTrack={selectedTrack === tracksLength - 1}>
            <FontAwesomeIcon onClick={() => changeTrack('prev')} icon={faBackward} />
            <FontAwesomeIcon  className="play" onClick={() => start(!isPlaying)} icon={isPlaying ? faPause : faPlay} />
            <FontAwesomeIcon onClick={() => changeTrack('next')} icon={faForward} />
        </ButtonsContainer>
    );
};

export default Buttons;