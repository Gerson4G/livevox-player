import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import posed, { PoseGroup } from 'react-pose';
import palette from '../constants';

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 70%;
    margin-left: 1em;
    position: relative;

    h3 {
        margin: 2px;
    }
    .playing {
        color: ${palette.current};
    }
    .icon-open {
        font-size: 30pt;
        display: flex;
        flex-direction: column;
        h4 {
            margin: auto;
            font-size: 14pt;
        }
        svg {
            align-self: center;
        }
    }
    .icon-open svg, .close {
        cursor: pointer;
        color: ${palette.action};
    }

    .track-list .track {
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .close {
        position: absolute;
        left: 100%;
        font-size: 15pt;
        top: 1em;
        transition: all 0.2s ease;
        &:hover {
            scale: 1.2;
        }
    }

    .track-list {
        height: auto;
        width: 130%;
        white-space: nowrap;
        overflow: hidden;
        background: ${palette.main};
        max-height: 65%;
        overflow: hidden auto;
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
                    <h4>Playlist</h4>
                    <FontAwesomeIcon onClick={() => {open(true)}}  icon={faList} />
                </Icon>
                :
                <List key={2} className="track-list"s>
                    <h3>Playlist</h3>
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