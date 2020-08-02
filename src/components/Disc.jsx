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
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;

    @keyframes rotating {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
    }

    .disc-image {
        height: 90%;
        width: auto;
        ${({isPlaying}) =>isPlaying && 'animation: rotating 2s linear infinite;' }
    }
`;

const Disc = ({isPlaying}) => {
    return(
        <StyledDisc isPlaying={isPlaying}>
            <FontAwesomeIcon className="disc-image" icon={faCompactDisc} />
        </StyledDisc>
    )
};

export default Disc;