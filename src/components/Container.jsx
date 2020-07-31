import React from 'react';
import styled from 'styled-components';
import Buttons from './Buttons';
import Disc from './Disc';
import Description from './Description';

const StyledContainer = styled.div`
    background-color: white;
    width: 80%;
    height: 6em;
`;

const Container = () => (
    <StyledContainer>
        <Disc />
        <Description />
        <Buttons/>
    </StyledContainer>
);

export default Container;