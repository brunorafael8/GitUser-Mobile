import React from "react";
import { Text, ScrollView } from "react-native";
import { graphql, QueryRenderer } from "react-relay";
import environment from "../../createRelayEnvironment";
import styled from "styled-components/native";
import UserProfile from "../../components/UserProfile/UserProfile";

const UserContainer = styled.ScrollView`
  background: #fff;
  height: 100%;
  padding: 20px;
  flex-direction: column;
`;

const PlaceholderText = styled.Text`
  color: #000;
  font-size: 16px;
`;

const User = props => {
  const { user } = props.query;
  console.log(user)
  return (
    <UserContainer>
      <UserProfile user={user} />
    </UserContainer>
  );
};

const query = graphql`
  query UserQuery($login: String!) {
    user(login: $login) {
      ...UserProfile_user
    }
  }
`;

const UserRenderer = ({ navigation }) => {
  return (
    <QueryRenderer
      environment={environment}
      query={query}
      variables={{ login: navigation.state.params.name }}
      render={({ error, props }) => {
        if (error) console.error(new Error(error));

        if (props) {
          return <User query={props} />;
        } else {
          return (
            <PlaceholderText>
              Searching for {navigation.state.params.name}, loading...
            </PlaceholderText>
          );
        }
      }}
    />
  );
};

export default UserRenderer;
