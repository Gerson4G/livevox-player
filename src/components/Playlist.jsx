import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import posed, { PoseGroup } from 'react-pose';

const Container = styled.div`
    width: 70%;
    margin-left: 1em;
    margin-top: 1em;
    position: relative;
    h4 {
        margin: 2px;
    }
    .playing {
        color: blue;
    }
    .icon-open {
        font-size: 30pt;
    }
    .icon-open svg, .close {
        cursor: pointer;
    }
    .track-list .track {
        cursor: pointer;
    }
    .close {
        position: absolute;
        right: 0;
        font-size: 20pt;
        top: 0;
    }

    .track-list {
        height: auto;
    }
`;

const List = posed.div({
    enter: { scale: 1 },
    exit: { scale: 0 },
  });
  
  const Icon = posed.div({
    enter: { scale: 1 },
    exit: { scale: 0 },
  });

const ProgressBar = (props) => {
    const { tracks, selectTrack, selectedTrack } = props;

    const [isOpen, open] = useState(false);

    return(
        <Container>
            <PoseGroup>
            {
                !isOpen ?
                <Icon key={1} className="icon-open">
                    <FontAwesomeIcon onClick={() => {open(true)}}  icon={faList} />
                </Icon>
                :
                <List key={2} className="track-list"s>
                    <h4>Playlist</h4>
                    <FontAwesomeIcon className="close" onClick={() => {open(false)}}  icon={faTimes} />
                    {
                        tracks.map( (track, i) => 
                            <div key={track.id} onClick={() => selectTrack(i)} className={`track ${i === selectedTrack ? 'playing' : ''}`}>{i+1} - {track.name}</div>
                        )
                    }
                </List>
            }
            </PoseGroup>
        </Container>
    )
}

export default ProgressBar;