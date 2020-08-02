import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import posed from 'react-pose';

const Container = styled.div`
    i {
        cursor: pointer;
    }
    .playing {
        color: blue;
    }
    .icon-open, .close  {
        font-size: 30pt;
        cursor: pointer;
    }
    .track-list .track {
        cursor: pointer;
    }
`;

const List = posed.div({
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
});

const Icon = posed.span({
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
});

const ProgressBar = (props) => {
    const { tracks, selectTrack, selectedTrack } = props;

    const [isOpen, open] = useState(false);

    return(
        <Container>
                <Icon className="icon-open" pose={!isOpen ? 'visible' : 'hidden'}>
                    <FontAwesomeIcon onClick={() => {open(true)}}  icon={faList} />
                </Icon>
                <List className="track-list" pose={isOpen ? 'visible' : 'hidden'}>
                    <FontAwesomeIcon className="close" onClick={() => {open(false)}}  icon={faTimes} />
                    {
                        tracks.map( (track, i) => 
                            <div key={track.id} onClick={() => selectTrack(i)} className={`track ${i === selectedTrack ? 'playing' : ''}`}>{i+1} - {track.name}</div>
                        )
                    }
                </List>
        </Container>
    )
}

export default ProgressBar;