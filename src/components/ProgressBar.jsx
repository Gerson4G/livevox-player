import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Time = styled.span``;

const Bar = styled.div`
    width: 80%;
    height: 5px;
    background: gray;
`;

const formatTime = (time) => {
    let date = new Date(0);
    date.setSeconds(time);
    let timeString = date.toISOString().substr(15, 4);
    return timeString;
}

const ProgressBar = (props) => {
    const { duration, currentTime } = props;
    return(
        <Container>
            <Time>{formatTime(currentTime)}</Time>
            <Time>{formatTime(duration)}</Time>
            <Bar />
        </Container>
    )
}

export default ProgressBar;