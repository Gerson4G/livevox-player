import React, {useEffect} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward, faBackward, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

const ButtonsContainer = styled.div`
    color: blue;
    align-self: center;
    cursor: pointer;
`;

const Buttons = (props) => {
    const {selectedTrack, selectTrack, tracksLength, isPlaying, start, currentTime, setTime} = props;

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
        if (isPlaying) {
          timer = setInterval(() => {
            setTime(currentTime => currentTime + 1);
          }, 1000);
        } else if (!isPlaying && currentTime !== 0) {
          clearInterval(timer);
        }
        return () => clearInterval(timer);
      }, [isPlaying, currentTime]);

    return(
        <ButtonsContainer>
            <FontAwesomeIcon onClick={() => changeTrack('prev')} icon={faBackward} />
            <FontAwesomeIcon onClick={() => start(!isPlaying)} icon={isPlaying ? faPause : faPlay} />
            <FontAwesomeIcon onClick={() => changeTrack('next')} icon={faForward} />
        </ButtonsContainer>
    );
};

export default Buttons;