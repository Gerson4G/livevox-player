import React from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

const DescriptionContainer = styled.div``;

const Description = () => (
    <DescriptionContainer>
        <div>name</div>
        <div>Artist</div>
        <div>time</div>
        <ProgressBar />
    </DescriptionContainer>
);

export default Description;