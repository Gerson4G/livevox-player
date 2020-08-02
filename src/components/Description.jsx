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
    padding: 10px;
    margin-top: -80px;
    background: green;
    width: 70vw;
    position: absolute;
    left: 15%;
    visibility: ${({isOpen}) => isOpen ? 'visible' : 'hidden'};
    opacity: ${({isOpen}) => isOpen ? '1' : '0'};
    transform: ${({isOpen}) => isOpen ? 'translateY(-45%)' : 'translateY(0)'};
    ${({isOpen}) => isOpen ? 'transition: visibility 0s linear 0.33s, opacity 0.33s linear, transform 0.33s linear;transition-delay: 0s;' : 'transition: visibility 0s linear 0.33s, opacity 0.33s linear, transform 0.33s linear;'}
    box-shadow: rgb(101, 101, 101) 0px -5px 80px 10px;
`;

const Description = (props) => {
    const { data: {name, artist, duration}, currentTime, setTime, audio} = props;
    const [isOpen, open] = useState(false);

    return(
        <DescriptionContainer>
            <span onClick={() => open(!isOpen)}>Track info</span>
            <Info isOpen={isOpen}>
                <div>Song name: {name}</div>
                <div>Artist: {artist}</div>
                <ProgressBar audio={audio} setTime={setTime} duration={duration} currentTime={currentTime}/>
            </Info>
        </DescriptionContainer>
    )
};

export default Description;