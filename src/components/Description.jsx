import React, { useState } from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';
import palette from '../constants';

const DescriptionContainer = styled.div`
    display: flex;
    align-items: center;
    span:first-child {
        cursor: pointer;
    }

`;

const Info = styled.div`
    display: block;
    text-align: center;
    background: ${palette.main};
    padding: 10px;
    margin-top: -80px;
    width: 65%;
    position: absolute;
    left: 17%;
    visibility: ${({isOpen}) => isOpen ? 'visible' : 'hidden'};
    opacity: ${({isOpen}) => isOpen ? '1' : '0'};
    transform: ${({isOpen}) => isOpen ? 'translateY(-50%)' : 'translateY(0)'};
    ${({isOpen}) => isOpen ? 'transition: visibility 0s linear 0.13s, opacity 0.13s linear, transform 0.13s linear;transition-delay: 0s;' : 'transition: visibility 0s linear 0.13s, opacity 0.13s linear, transform 0.13s linear;'}
    box-shadow: 0px -22px 12px -12px rgb(101, 101, 101);
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