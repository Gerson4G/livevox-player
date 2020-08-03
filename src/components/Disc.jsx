import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import palette from '../constants';
import { useEffect } from 'react';

const radius = 7;
const border = 5;

const StyledDisc = styled.div`
    border-radius: ${border}em;
    height: ${radius}em;
    width: ${radius+6}em;
    align-self: flex-start;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;

    img {
        border-radius: ${border}em;
    }

    @keyframes rotating {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
    }

    .disc-image, img {
        height: 90%;
        width: auto;
        color: ${palette.action};
        ${({isPlaying}) => isPlaying && 'animation: rotating 4s linear infinite;'}
    }
`;

const Disc = ({isPlaying, image}) => {
    const [error, setError] = useState(false);

    useEffect(() => {
        setError(false);
    }, [image])

    return(
        <StyledDisc isPlaying={isPlaying}>
            {   !error ?
                <img alt="disc cover" src={image} onError={() => setError(true)}></img> :
                <FontAwesomeIcon className="disc-image" icon={faCompactDisc} />
            }
        </StyledDisc>
    )
};

export default Disc;