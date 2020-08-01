import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Time = styled.span``;

const Bar = styled.div`
    width: 80%;
    height: 5px;
    background: gray;
`;

const ProgressBar = (props) => (
    <Container>
        <Time>Current Time</Time>
        <Time>End Time</Time>
        <Bar />
    </Container>
)

export default ProgressBar;