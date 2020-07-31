import React from 'react';
import styled from 'styled-components';

const radius = '3em';

const StyledDisc = styled.div`
    border-radius: 3em;
    background-color: red;
    height: ${radius};
    width: ${radius};
`;

const Disc = () => <StyledDisc/>;

export default Disc;