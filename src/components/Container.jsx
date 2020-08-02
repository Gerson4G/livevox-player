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
    font-family: 'Merienda', cursive;
    display: flex;
    margin: auto;
    justify-content: space-between;
    background-color: white;
    width: 70%;
    height: 6em;
    box-shadow: rgb(101, 101, 101) 0px 30px 80px 0px;
    padding: 0 15px;

    .left-item {
        display: flex;
        justify-content: space-between;
    }

    & > :first-child, & > :last-child {
        width: 25%;
    }
 
`;

const audio = new Audio();
audio.loop = false;

const Container = (props) => {
    const { tracksFetch } = props;
    const [selectedTrack, selectTrack] = useState(0);
    const [currentTime, setTime] = useState(0);
    const [ isPlaying, start ] = useState(false);

    const data = tracksFetch.rejected ? mock : tracksFetch.value;

    useEffect(() => {
        setTime(0);
        audio.currentTime = 0;
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
    
    return(
        <StyledContainer>
            <div className="left-item">
                <Disc isPlaying={isPlaying}/>
                <Playlist selectTrack={selectTrack} selectedTrack={selectedTrack} tracks={data} />
            </div>
            <Description audio={audio} data={data[selectedTrack]} currentTime={currentTime} setTime={setTime}/>
            <Buttons audio={audio} music={data[selectedTrack]?.music} duration={data[selectedTrack]?.duration ?? 0} currentTime={currentTime} setTime={setTime} selectTrack={selectTrack} selectedTrack={selectedTrack} tracksLength={data?.length ?? 1} start={start} isPlaying={isPlaying}/>
        </StyledContainer>
    )
};

export default connect(() => ({
    tracksFetch: 'localhost:5000'//`https://app.fakejson.com/q/SkPzE8AU?token=DLq16Ek6ilC7Ue3sXfpELA`,
  }))(Container);
