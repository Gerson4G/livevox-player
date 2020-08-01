import React, { useState } from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

const DescriptionContainer = styled.div`
    span:first-child {
        cursor: pointer;
    }

`;

const Info = styled.div`
    display: block;
    visibility: ${({isOpen}) => isOpen ? 'visible' : 'hidden'};
    opacity: ${({isOpen}) => isOpen ? '1' : '0'};
    transform: ${({isOpen}) => isOpen ? 'translateY(110%)' : 'translateY(0)'};
    ${({isOpen}) => isOpen ? 'transition: visibility 0s linear 0.33s, opacity 0.33s linear, transform 0.33s linear;transition-delay: 0s;' : 'transition: visibility 0s linear 0.33s, opacity 0.33s linear, transform 0.33s linear;'}
`;

const Description = (props) => {
    const { data: {name, artist, duration}, currentTime, setTime} = props;
    const [isOpen, open] = useState(false);

    return(
        <DescriptionContainer>
            <span onClick={() => open(!isOpen)}>Track info</span>
            <Info isOpen={isOpen}>
                <div>Song name: {name}</div>
                <div>Artist: {artist}</div>
                <ProgressBar setTime={setTime} duration={duration} currentTime={currentTime}/>
            </Info>
        </DescriptionContainer>
    )
};

export default Description;