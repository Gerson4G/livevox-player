import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';

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

    const getProgress = () => {
        let progress = 0;
        if(barElement?.current){
            progress = (currentTime * 100) / duration;
        }
        return progress;
    }

    const selectTime = ({nativeEvent: {offsetX}}) => {
        const percentage = (offsetX * 100) / barElement.current.clientWidth;
        let time = (percentage * duration) / 100;
        if(time === duration){
            time =- 1;
        }
        audio.currentTime = time;
        setTime(time);
    }

    return(
        <Container>
            <Time>{formatTime(currentTime)}</Time>
            <Time>{formatTime(duration)}</Time>
            <div><BarContainer ref={barElement} onClick={selectTime}><Bar progress={getProgress()}/></BarContainer></div>
        </Container>
    )
}

export default ProgressBar;