import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import palette from '../constants';
import { useEffect } from 'react';

const radius = '3em';

const StyledDisc = styled.div`
    border-radius: 3em;
    background-color: ${palette.pasive};
    height: ${radius};
    width: ${radius};
    align-self: flex-start;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;

    img {
        border-radius: 30px;
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
        ${({isPlaying}) =>isPlaying && 'animation: rotating 4s linear infinite;' }
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
                <img src={image} onError={() => setError(true)}></img> :
                <FontAwesomeIcon className="disc-image" icon={faCompactDisc} />
            }
        </StyledDisc>
    )
};

export default Disc;