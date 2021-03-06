import React from 'react'
import { ScrollView, Text } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import { graphql, QueryRenderer } from 'react-relay'
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

const PlaceholderText = styled.Text`
  color: #000;
  font-size: 16px;
`
export interface UserProps {
  query: UserQuery
}

const User = (props: UserProps) => {
  const { user } = props.query

  return (
    <UserContainer>
      <UserProfile user={user} />
    </UserContainer>
  )
}

const query = graphql`
  query UserQuery($login: String!) {
    user(login: $login) {
      ...UserProfile_user
    }
  }
`

const UserRenderer = ({ navigation }: NavigationScreenProp<>) => {
  return (
    <QueryRenderer
      environment={environment}
      query={query}
      variables={{ login: navigation.state.params.name }}
      render={({ error, props }) => {
        if (error) {
          console.error(new Error(error))
        }

        if (props) {
          return <User query={props} />
        } else {
          return <PlaceholderText>Searching for {navigation.state.params.name}, loading...</PlaceholderText>
        }
      }}
    />
  )
}

export default UserRenderer
