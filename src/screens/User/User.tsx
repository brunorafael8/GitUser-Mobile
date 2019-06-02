import React from "react";
import { Text } from "react-native";

import { graphql, createFragmentContainer, QueryRenderer } from "react-relay";
import environment from "../../createRelayEnvironment";

import UserProfile from "../../components/UserProfile/UserProfile";

class User extends React.Component {
  render() {
    const { user } = this.props;
    return <UserProfile user={user} />;
  }
}

const UserProfileFragmentContainer = createFragmentContainer(User, {
  user: graphql`
    fragment User_user on User {
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
  `
});

const query = graphql`
  query UserQuery($login: String!) {
    user(login: $login) {
      ...User_user
    }
  }
`;

const UserProfileRenderer = ({ navigation }) => {
  return (
    <QueryRenderer
      environment={environment}
      query={query}
      variables={{ login: navigation.state.params.name }}
      render={({ error, props }) => {
        if (error) console.error(new Error(error));

        if (props) {
          return <UserProfileFragmentContainer user={props.user} />;
        } else {
          return (
            <Text>
              Searching for {navigation.state.params.name}, loading...
            </Text>
          );
        }
      }}
    />
  );
};

export default UserProfileRenderer;
