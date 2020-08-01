import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'

const radius = '3em';

const StyledDisc = styled.div`
    border-radius: 3em;
    background-color: red;
    height: ${radius};
    width: ${radius};
    align-self: flex-start;
    margin-top: -1em;
`;

const Disc = () => {
    return(
        <StyledDisc>
            <FontAwesomeIcon icon={faCompactDisc} />
        </StyledDisc>
    )
};

export default Disc;