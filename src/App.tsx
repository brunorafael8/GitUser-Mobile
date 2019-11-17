/**
 * @format
 */

import React from 'react';
import styled from 'styled-components/native';

const SafeArea = styled.SafeAreaView`
  background-color: #e90052;
`;

const Container = styled.View`
  background-color: #e90052;
  padding: 10px;
  height: 100%;
`;

const Title = styled.Text`
  color: #38003c;
  font-weight: bold;
  padding: 5px;
  font-size: 30px;
  border-bottom-color: #38003c;
  border-bottom-width: 3px;
`;

const App = () => (
  <>
    <SafeArea>
      <Container>
        <Title>GITUSER</Title>
      </Container>
    </SafeArea>
  </>
);

export default App;
