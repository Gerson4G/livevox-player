import React from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

const DescriptionContainer = styled.div``;

const Description = (props) => {
    const { data: {name, artist, duration}, currentTime, setTime} = props;
    return(
        <DescriptionContainer>
            <div>Song name: {name}</div>
            <div>Artist: {artist}</div>
            <ProgressBar setTime={setTime} duration={duration} currentTime={currentTime}/>
        </DescriptionContainer>
    )
};

export default Description;