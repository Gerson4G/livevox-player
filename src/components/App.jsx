import React from 'react';
import Container from './Container';
import styled from 'styled-components';

const MainApp = styled.div`
  background-color: rgb(0, 147, 233);
  height: 100vh;
  display: flex;
`;

function App() {
  return (
    <MainApp>
      <Container/>
    </MainApp>
  );
}

export default App;
