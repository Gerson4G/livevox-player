import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Buttons from './Buttons';
import Disc from './Disc';
import Description from './Description';
import Playlist from './Playlist';
import { connect } from 'react-refetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import {mock} from '../data.js';

const StyledContainer = styled.div`
    display: flex;
    margin: auto;
    justify-content: space-evenly;
    background-color: white;
    width: 80%;
    height: 6em;
    box-shadow: rgb(101, 101, 101) 0px 30px 80px 0px;
`;

const Container = (props) => {
    const { tracksFetch } = props;
    const [selectedTrack, selectTrack] = useState(0);
    const [currentTime, setTime] = useState(0);
    const [ isPlaying, start ] = useState(false);


    useEffect(() => {
        setTime(0)
    }, [selectedTrack])

    useEffect(() => {
        let { value } = tracksFetch;
        if(!value){
            value = mock;
        }
        if(value && currentTime === value[selectedTrack]?.duration && selectedTrack < value.length - 1 ){
            selectTrack(selectTrack + 1);
        }
    }, [currentTime])

    if(tracksFetch.pending){
        return <FontAwesomeIcon icon={faMusic} />
    }
    
    const data = tracksFetch.rejected ? mock : tracksFetch.value;

    return(
        <StyledContainer>
            <Disc />
            <Description data={data[selectedTrack]} currentTime={currentTime} setTime={setTime}/>
            <Buttons currentTime={currentTime} setTime={setTime} selectTrack={selectTrack} selectedTrack={selectedTrack} tracksLength={data?.length ?? 1} start={start} isPlaying={isPlaying}/>
            <Playlist selectTrack={selectTrack} selectedTrack={selectedTrack} tracks={data} />
        </StyledContainer>
    )
};

export default connect(() => ({
    tracksFetch: `https://app.fakejson.com/q/SkPzE8AU?token=DLq16Ek6ilC7Ue3sXfpELA`,
  }))(Container);
