import React, {useRef} from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Time = styled.span``;

const Bar = styled.div`
    width: 80%;
    height: 10px;
    background: gray;
`;

const formatTime = (time) => {
    let date = new Date(0);
    date.setSeconds(time);
    let timeString = date.toISOString().substr(15, 4);
    return timeString;
}

const ProgressBar = (props) => {
    const barElement = useRef(null);
    const { duration, currentTime, setTime } = props;

    const selectTime = ({nativeEvent: {offsetX}}) => {
        const percentage = (offsetX * 100) / barElement.current.clientWidth;
        let time = (percentage * duration) / 100;
        if(time === duration){
            time =- 1;
        }
        setTime(time);
    }

    return(
        <Container>
            <Time>{formatTime(currentTime)}</Time>
            <Time>{formatTime(duration)}</Time>
            <div><Bar ref={barElement} onClick={selectTime} /></div>
        </Container>
    )
}

export default ProgressBar;