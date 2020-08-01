import React from 'react';
import styled from 'styled-components';

const ButtonsContainer = styled.div`
    color: blue;
    align-self: center;
`;

const Buttons = () => (
    <ButtonsContainer>
        <i>{`<`}</i>
        <i>Play</i>
        <i>{`>`}</i>
    </ButtonsContainer>
);

export default Buttons;