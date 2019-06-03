import React, { useState } from 'react'
import { Keyboard } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import styled from 'styled-components/native'
import Search from '../../components/Search/Search'
import SearchButton from '../../components/SearchButton/SearchButton'

const HomePage = styled.View`
  background: white;
  padding: 10px;
  height: 100%;
`

const Title = styled.Text`
  color: #000;
  padding: 5px;
  font-size: 30px;
  border-bottom-color: #000;
  border-bottom-width: 1px;
`

const ErrorText = styled.Text`
  color: #ed2025;
  text-align: center;
`

const SearchButtonContent = styled.View``

const SearchButtonText = styled.Text`
  color: #fcfdfe;
  font-size: 18;
  font-weight: bold;
  align-self: center;
`

const FormSearch = styled.View`
  margin-top: 50px;
  padding: 10px;
`

export interface HomeProps {
  navigation: NavigationScreenProp<>
}

const Home = (props: HomeProps) => {
  const [user, setUser] = useState<string>('')
  const [errors, setErrors] = useState<string[]>([])

  const onSearch = () => {
    if (onValid()) {
      props.navigation.navigate('User', { name: user })
      Keyboard.dismiss()
    }
  }

  const onValid = () => {
    if (!onValidLength()) {
      setErrors([])
      setTimeout(() => setErrors([...errors, 'User inválido.']), 100)
      return false
    }
    return true
  }

  const onValidLength = () => {
    if (user.length > 0) {
      return true
    }

    return false
  }

  return (
    <HomePage>
      <Title>GITUSER</Title>
      {errors && errors.map((erro, i) => <ErrorText key={i}>{erro}</ErrorText>)}
      <FormSearch>
        <Search
          autoFocus={true}
          maxLength={15}
          onChangeText={text => setUser(text)}
          onSubmitEditing={onSearch}
          placeholder="Ex: brunorafael8"
        />
        <SearchButton onPress={onSearch}>
          <SearchButtonContent>
            <SearchButtonText>Search</SearchButtonText>
          </SearchButtonContent>
        </SearchButton>
      </FormSearch>
    </HomePage>
  )
}

export default Home
