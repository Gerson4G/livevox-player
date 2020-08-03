import React, { useState } from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';
import palette from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const DescriptionContainer = styled.div`
    display: flex;
    align-items: center;
    & :first-child {
        cursor: pointer;
    }
`;

const Info = styled.div`
    display: block;
    border-radius: 10px;
    text-align: center;
    background: ${palette.main};
    padding: 10px;
    margin-top: -80px;
    width: 65%;
    position: absolute;
    left: 17%;
    visibility: ${({isOpen}) => isOpen ? 'visible' : 'hidden'};
    opacity: ${({isOpen}) => isOpen ? '1' : '0'};
    box-shadow: 0px -22px 12px -12px rgb(101, 101, 101);
    ${({animation, isOpen}) => animation === 1 &&
        `transform: ${isOpen ? 'translateY(-80%)' : 'translateY(0)'};
        ${isOpen ? 'transition: visibility 0s linear 0.13s, opacity 0.13s linear, transform 0.13s linear;transition-delay: 0s;' : 'transition: visibility 0s linear 0.13s, opacity 0.13s linear, transform 0.13s linear;'}
        `
    }
    
    ${({animation, isOpen}) => animation === 2 &&
        `${isOpen ? 'transition: visibility 0s linear 0.13s, opacity 0.13s linear, transform 0.13s linear;transition-delay: 0s;' : 'transition: visibility 0s linear 0.13s, opacity 0.13s linear, transform 0.13s linear;'}
        width: 30%;
        left: 35%;
        margin-top: 0;
        box-shadow: none;
        `
    }

    .close {
        font-size: 14pt;
        margin-top: 1em;
        color: ${palette.action}
    }
    
`;

const Description = (props) => {
    const { data: {name, artist, duration}, currentTime, setTime, audio} = props;
    const [isOpen, open] = useState(false);

    return(
        <DescriptionContainer>
            <h2 onMouseOver={() => open(true)}>Track info</h2>
            <Info animation={2} isOpen={isOpen}>
                <div><b>Song name:</b> {name}</div>
                <div><b>Artist:</b> {artist}</div>
                <ProgressBar audio={audio} setTime={setTime} duration={duration} currentTime={currentTime}/>
                <FontAwesomeIcon className="close" onClick={() => {open(false)}}  icon={faTimes} />
            </Info>
        </DescriptionContainer>
    )
};

export default Description;