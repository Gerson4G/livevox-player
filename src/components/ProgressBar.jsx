import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import Popover from 'react-tiny-popover'
import { useState } from 'react';

const height = '10';

const Container = styled.div``;

const Time = styled.span``;

const Bar = styled.div`
    width: ${({progress}) => progress}%;
    background: blue;
    height: ${height}px;
`;

const BarContainer = styled.div`
    background: gray;
    width: 100%;
    height: ${height}px;
`;
    
const formatTime = (time) => {
    let date = new Date(0);
    date.setSeconds(time);
    let timeString = date.toISOString().substr(15, 4);
    return timeString;
}
    

const ProgressBar = (props) => {
    const barElement = useRef(null);
    const { duration, currentTime, setTime, audio } = props;
    const [isPopoverOpen, openPopover] = useState(false);
    const [popoverContent, setPopoverContent] = useState('');
    const [popoverPos, setPopooverPos] = useState({});

    const getProgress = () => {
        let progress = 0;
        if(barElement?.current){
            progress = (currentTime * 100) / duration;
        }
        return progress;
    }

    const getTime = (position, width) => {
        const percentage = (position * 100) / width;
        return (percentage * duration) / 100;
    }

    const selectTime = ({nativeEvent: {offsetX}}) => {
        let time = getTime(offsetX, barElement.current.clientWidth);
        if(time === duration){
            time =- 1;
        }
        audio.currentTime = time;
        setTime(time);
    }

    const showPopover = ({nativeEvent: {offsetX}, clientX, clientY}) => {
        setPopoverContent( formatTime(getTime(offsetX, barElement.current.clientWidth)) );
        setPopooverPos({left: clientX, top: clientY - 30})
        openPopover(true)
    }

    return(
        <Container>
            <Time>{formatTime(currentTime)}</Time>
            <Time>{formatTime(duration)}</Time>
            <Popover
                isOpen={isPopoverOpen}
                position={'top'}
                content={<div>{popoverContent}</div>}
                contentLocation={popoverPos}
                disableReposition
            >
                <div><BarContainer onMouseMove={showPopover} onMouseLeave={() => openPopover(false)} onMouseOver={showPopover} ref={barElement} onClick={selectTime}><Bar progress={getProgress()}/></BarContainer></div>
            </Popover>
        </Container>
    )
}

export default ProgressBar;