import React, {useEffect} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward, faBackward, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import palette from '../constants';

const ButtonsContainer = styled.div`
    color: ${palette.action};
    align-self: center;
    display: flex;
    justify-content: center;
    > * {
      cursor: pointer;
    }

    svg {
      margin: 0 5px;
      font-size: 30pt;
      transition: all 0.3s ease;
      &:hover {
        scale: 1.2;
      }
    }

    .play {
      font-size: 28pt;
      align-self: center;
    }

    .fa-forward {
      ${({isLastTrack}) => isLastTrack && 'cursor: not-allowed;'}
    }
    .fa-backward {
      ${({isFirstTrack}) => isFirstTrack && 'cursor: not-allowed;'}
    }
`;

const Buttons = (props) => {
    const {selectedTrack, selectTrack, tracksLength, isPlaying, start, currentTime, setTime, duration, music, audio} = props;

    const changeTrack = (dir) => {
        if(dir === 'next' && selectedTrack < tracksLength - 1){
            selectTrack(selectedTrack + 1);
        }
        else if(dir === 'prev' && selectedTrack > 0){
            selectTrack(selectedTrack + -1);
        }
    }


    useEffect(() => {
      audio.src = music;
    }, [music])

    useEffect(() => {
        let timer = null;
        if(isPlaying && currentTime >= duration && selectedTrack < tracksLength - 1){
          setTime(0);
          audio.currentTime = 0;
          selectTrack(selectedTrack+1);
        }
        else if(isPlaying && currentTime >= duration && selectedTrack === tracksLength - 1){
          setTime(0);
          audio.currentTime = 0;
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
      
    const playStop = () => {
      if(isPlaying){
        audio.pause();  
      }
      else{
        audio.play();
      }
      start(!isPlaying);
    }

    return(
        <ButtonsContainer isFirstTrack={selectedTrack === 0} isLastTrack={selectedTrack === tracksLength - 1}>
            <FontAwesomeIcon onClick={() => changeTrack('prev')} icon={faBackward} />
            <FontAwesomeIcon  className="play" onClick={playStop} icon={isPlaying ? faPause : faPlay} />
            <FontAwesomeIcon onClick={() => changeTrack('next')} icon={faForward} />
        </ButtonsContainer>
    );
};

export default Buttons;