import React, { PureComponent } from 'react';
import { Text, View, Keyboard } from 'react-native';
import styled from 'styled-components/native';

import Search from '../../components/Search/Search';
import SearchButton from '../../components/SearchButton/SearchButton';

const HomePage = styled.View`
  background: white;
  padding: 10px;
  height: 100%;
`;

const Title = styled.Text`
  color: #000;
  padding: 5px;
  font-size: 30px;
  border-bottom-color: #000;
  border-bottom-width: 1px;
`;
const ErrorText = styled.Text`
  color: #ed2025;
  text-align: center;
`;
const FormSearch = styled.View`
  margin-top: 50px;
  padding: 10px;
`;

class Home extends PureComponent {
  state = {
    user: '',
    errors: [],
  };

  onSearch = () => {
    if (this.onValid()) {
      this.props.navigation.navigate('User', { name: this.state.user });
      Keyboard.dismiss();
    }
  };
  onValid = () => {
    if (!this.onValidLength()) {
      this.setState({ errors: [] });
      setTimeout(
        () =>
          this.setState({ errors: [...this.state.errors, 'User inválido.'] }),
        100,
      );
      return false;
    }
    return true;
  };
  onValidLength = () => {
    if (this.state.user.length > 0) {
      return true;
    }
    return false;
  };
  render() {
    return (
      <HomePage>
        <Title>GITUSER</Title>
        {this.state.errors &&
          this.state.errors.map(erro => <ErrorText>{erro}</ErrorText>)}
        <FormSearch>
          <Search
            autoFocus={true}
            maxLength={15}
            onChangeText={user => this.setState({ user })}
            onSubmitEditing={this.onSearch}
            placeholder="Ex: brunorafael8"
          />
          <SearchButton onPress={this.onSearch}>
            <View>
              <Text
                style={{
                  color: '#fcfdfe',
                  fontSize: 18,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                }}
              >
                Search
              </Text>
            </View>
          </SearchButton>
        </FormSearch>
      </HomePage>
    );
  }
}

export default Home;
