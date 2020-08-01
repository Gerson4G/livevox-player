import React from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

const DescriptionContainer = styled.div``;

const Description = (props) => {
    const { data: {name, artist, duration} } = props;
    return(
        <DescriptionContainer>
            <div>Song name: {name}</div>
            <div>Artist: {artist}</div>
            <ProgressBar duration={duration}/>
        </DescriptionContainer>
    )
};

export default Description;