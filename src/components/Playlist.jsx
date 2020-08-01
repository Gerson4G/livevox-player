import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const Container = styled.div`
    i {
        cursor: pointer;
    }
    .playing {
        color: blue;
    }
`;

const ProgressBar = (props) => {
    const { tracks, selectTrack, selectedTrack } = props;

    const [isOpen, open] = useState(false);

    return(
        <Container>
            {
                !isOpen ?
                <FontAwesomeIcon onClick={() => {open(true)}}  icon={faList} />
                :
                <div>
                    <FontAwesomeIcon onClick={() => {open(false)}}  icon={faTimes} />
                    {
                        tracks.map( (track, i) => 
                            <div key={track.id} onClick={() => selectTrack(i)} className={i === selectedTrack ? 'playing' : ''}>{i+1} - {track.name}</div>
                        )
                    }
                </div>
            }
        </Container>
    )
}

export default ProgressBar;