import React from 'react'
import { ScrollView, Text } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import { graphql, QueryRenderer, useQuery } from 'relay-hooks'
import styled from 'styled-components/native'
import UserProfile from '../../components/UserProfile/UserProfile'
import environment from '../../createRelayEnvironment'
import { UserQuery } from './__generated__/UserQuery.graphql.ts'

const UserContainer = styled.ScrollView`
  background: #fff;
  height: 100%;
  padding: 20px;
  flex-direction: column;
`

const ErrorText = styled.Text`
  color: red;
  font-size: 16px;
`

const PlaceholderText = styled.Text`
  color: #000;
  font-size: 16px;
`

const query = graphql`
  query UserQuery($login: String!) {
    user(login: $login) {
      ...UserProfile_user
    }
  }
`

const User = ({ navigation }: NavigationScreenProp<>) => {
  const hooksProps = useQuery({
    environment,
    query,
    variables: { login: navigation.state.params.name },
  })

  const { props, error, retry, cached } = hooksProps

  if (props && props.user) {
    return (
      <UserContainer>
        <UserProfile {...hooksProps} />
      </UserContainer>
    )
  } else if (error) {
    return <ErrorText>{error}</ErrorText>
  }

  return <PlaceholderText>Searching for {navigation.state.params.name}, loading...</PlaceholderText>
}

export default User
