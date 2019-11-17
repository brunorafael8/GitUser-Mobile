/**
 * @format
 */

import React from 'react';
import Config from "react-native-config";
import Icon from 'react-native-vector-icons/Octicons';
import styled from 'styled-components/native';

const SafeArea = styled.SafeAreaView`
  background-color: #e90052;
`;

const Container = styled.View`
  background-color: #e90052;
  padding: 10px;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  color: #38003c;
  font-weight: bold;
  padding: 5px;
  font-size: 40px;
  border-bottom-color: #38003c;
  border-bottom-width: 3px;
  margin-top: 40px;
  letter-spacing: 6px;
`;

const Content = styled.View`
  margin-top: 100px;
  width: 80%;
  height: 40%;
  justify-content: center;
`;

const SearchInput = styled.TextInput`
  height: 50px;
  width: 100%;
  border-radius: 5px;
  border: 1px;
  padding: 15px;
  border-color: #38003c;
  background-color: white;
`;

const SearchButton = styled.TouchableOpacity`
  background-color: #38003c;
  border-radius: 5px;
  width: 100%;
  margin-top: 15px;
  padding: 15px;
`
const SearchButtonContent = styled.View``

const SearchButtonText = styled.Text`
  color: #fff;
  font-size: 18;
  font-weight: bold;
  align-self: center;
`

const App = () =>{ 
  console.log(Config)
  return(
  <>
    <SafeArea>
      <Container>
        <Title>GITUSER</Title>
        <Icon name="mark-github" size={50} color="#38003c" />

        <Content>
          <SearchInput placeholder="Ex: brunorafael8"></SearchInput>
          <SearchButton>
          <SearchButtonContent>
            <SearchButtonText>Search</SearchButtonText>
          </SearchButtonContent>
        </SearchButton>
        </Content>
      </Container>
    </SafeArea>
  </>
);
}
export default App;
