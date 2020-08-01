import React from 'react';
import styled from 'styled-components';
import Buttons from './Buttons';
import Disc from './Disc';
import Description from './Description';

const StyledContainer = styled.div`
    display: flex;
    margin: auto;
    justify-content: space-evenly;
    background-color: white;
    width: 80%;
    height: 6em;
    box-shadow: rgb(101, 101, 101) 0px 30px 80px 0px;
`;

const Container = () => (
    <StyledContainer>
        <Disc />
        <Description />
        <Buttons/>
    </StyledContainer>
);

export default Container;