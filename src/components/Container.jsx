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
import palette from '../constants';

const StyledContainer = styled.div`
    font-family: 'Merienda', cursive;
    display: flex;
    margin: auto;
    justify-content: space-between;
    background-color: ${palette.main};
    width: 70%;
    height: 10em;
    border-radius: 10px;
    box-shadow: rgb(101, 101, 101) 0px 1px 60px 0px;
    padding: 0 15px;
    border: 2px solid ${palette.action};

    .left-item {
        display: flex;
        justify-content: space-between;
    }

    & > :first-child, & > :last-child {
        width: 25%;
    }
 
`;

const Loading = styled.div`
    color: ${palette.action};
    margin: auto;
    & > * {    
        font-size: 40pt;
        animation: loader 0.6s infinite alternate;
        margin: 10px;
    }
    > :nth-child(2) {
        animation-delay: 0.4s;
    }

    > :nth-child(3) {
        animation-delay: 0.8s;
    }

    @keyframes loader {
        from {
            opacity: 1;
            transform: translate3d(0);
        }
        to {
            opacity: 0.1;
            transform: translate3d(0, -1rem, 0);
        }
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
    }, [selectedTrack]);

    useEffect(() => {
        let { value } = tracksFetch;
        if(!value){
            value = mock;
        }
        if(value && currentTime === value[selectedTrack]?.duration && selectedTrack < value.length - 1 ){
            selectTrack(selectTrack + 1);
        }
    }, [currentTime]);

    if(tracksFetch.pending){
        return (
            <Loading>
                <FontAwesomeIcon icon={faMusic} />
                <FontAwesomeIcon icon={faMusic} />
                <FontAwesomeIcon icon={faMusic} />
            </Loading>
        )
    }
    
    return(
        <StyledContainer>
            <div className="left-item">
                <Disc isPlaying={isPlaying} image={data[selectedTrack]?.image}/>
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
