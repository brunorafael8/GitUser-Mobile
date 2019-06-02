import React from 'react'
import { FlatList, Linking, ScrollView, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Octicons'
import { createFragmentContainer, graphql } from 'react-relay'
import styled from 'styled-components/native'

const Profile = styled.View`
  background: #fff;
  height: 100%;
  padding: 20px;
  flex-direction: column;
`

const UserAvatar = styled.Image`
  height: 110px;
  width: 110px;
`
const UserName = styled.Text`
  color: #000;
  font-size: 16px;
`
const UserLogin = styled.Text`
  color: #666;
  font-size: 14px;
`
const Userlinks = styled.Text`
  color: #0366d6;
  font-size: 14px;
`
const UserBio = styled.Text`
  color: #6a737d;
  font-size: 14px;
`
const UserCompany = styled.Text`
  color: #24292e;
  font-size: 14px;
  font-weight: bold;
`
const UserLocation = styled.Text`
  color: #24292e;
  font-size: 14px;
`
const UserOrganizaitons = styled.View`
  flex-direction: row;
`
const UserOrganizaiton = styled.Image`
  width: 30px;
  height: 30px;
`

const UserProfile = props => {
  const { user } = props

  return (
    <>
      <UserName>{user.name}</UserName>
      <UserAvatar source={{ uri: `${user.avatarUrl}` }} alt="" />
      <UserLogin>{user.login}</UserLogin>
      <UserBio>{user.bio}</UserBio>
      <UserCompany>{user.company}</UserCompany>
      <UserLocation>{user.location}</UserLocation>
      <Userlinks href={`mailto:${user.email}`}>{user.email}</Userlinks>
      <Userlinks href={user.websiteUrl}>{user.websiteUrl}</Userlinks>
      <UserOrganizaitons>
        {user.organizations.edges.map(({ node }) => (
          <View aria-label={node.login} onPress={() => Linking.openURL(node.url)} key={node.id}>
            <UserOrganizaiton source={{ uri: `${node.avatarUrl}` }} />
          </View>
        ))}
      </UserOrganizaitons>
      <Text
        style={{
          borderBottomColor: '#e36209',
          borderBottomWidth: 2,
          fontSize: 15,
          color: '#000',
          marginTop: 20,
        }}
      >
        Repositories:{' '}
      </Text>
      <FlatList
        data={user.repositories.nodes}
        keyExtractor={user.repositories.nodes.id}
        renderItem={({ item }) => (
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: '#000', fontSize: 15 }}>{item.name}</Text>
            <Text style={{ color: '#000', fontSize: 15 }}>{item.description}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#000', fontSize: 10, marginLeft: 10 }}>
                <Icon name="star" size={20} color="#000" /> {item.stargazers.totalCount}
              </Text>
              <Text style={{ color: '#000', fontSize: 12, marginLeft: 10 }}>
                <Icon name="repo-forked" size={20} color="#000" /> {item.forks.totalCount}
              </Text>
            </View>
          </View>
        )}
      />
    </>
  )
}

const UserProfileFragmentContainer = createFragmentContainer(UserProfile, {
  user: graphql`
    fragment UserProfile_user on User {
      avatarUrl
      name
      login
      bio
      company
      location
      email
      websiteUrl
      organizations(first: 10) {
        edges {
          node {
            id
            avatarUrl
            teamsUrl
            url
            login
          }
        }
      }
      repositories(last: 10) {
        nodes {
          id
          name
          description
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
        }
      }
    }
  `,
})

export default UserProfileFragmentContainer
