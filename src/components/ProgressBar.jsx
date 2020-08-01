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
    const [,m , s] = time.split(':');
    return [m, s].join(':');
}

const ProgressBar = (props) => {
    const { duration, currentTime } = props;
    return(
        <Container>
            <Time>{currentTime}</Time>
            <Time>{formatTime(duration)}</Time>
            <Bar />
        </Container>
    )
}

export default ProgressBar;