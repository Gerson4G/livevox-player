import React, {useState} from 'react';
import styled from 'styled-components';
import Buttons from './Buttons';
import Disc from './Disc';
import Description from './Description';
import { connect, PromiseState } from 'react-refetch'

const StyledContainer = styled.div`
    display: flex;
    margin: auto;
    justify-content: space-evenly;
    background-color: white;
    width: 80%;
    height: 6em;
    box-shadow: rgb(101, 101, 101) 0px 30px 80px 0px;
`;

const Container = (props) => {
    const { tracksFetch } = props;
    const [selectedTrack, selectTrack] = useState(0);

    if(tracksFetch.pending){
        return <>'Loading'</>
    }

    return(
        <StyledContainer>
            <Disc />
            <Description data={tracksFetch.value[selectedTrack]}/>
            <Buttons/>
        </StyledContainer>
    )
};

export default connect(() => ({
    tracksFetch: `https://app.fakejson.com/q/SkPzE8AU?token=DLq16Ek6ilC7Ue3sXfpELA`,
  }))(Container);
