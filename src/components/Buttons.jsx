import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward, faBackward, faPlay } from '@fortawesome/free-solid-svg-icons'

const ButtonsContainer = styled.div`
    color: blue;
    align-self: center;
`;

const Buttons = () => (
    <ButtonsContainer>
        <FontAwesomeIcon icon={faBackward} />
        <FontAwesomeIcon icon={faPlay} />
        <FontAwesomeIcon icon={faForward} />
    </ButtonsContainer>
);

export default Buttons;