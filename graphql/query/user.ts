import { graphql } from "../../gql";

export const verifyUserQuery = graphql(`
  query VerifyUser($token: String!) {
    verifyUser(token: $token)
  }
`);

export const getCurrentUserQuery = graphql(`
  #graphql
  query CurrentUser {
    getCurrentUser {
      id
      email
      imageUrl
      firstName
      lastName
    }
  }
`);

export const getUserByIdQuery = graphql(`
  query GetUserById($id: ID!) {
    getUserById(id: $id) {
      id
      email
      imageUrl
      firstName
      lastName
      description
      location
      createdAt
      isIam
      tweets {
        id
        content
        imageUrl
        has_liked
        likes_count
        createdAt
        author {
          id
          firstName
          lastName
          imageUrl
        }
      }
      followers_count
      has_following
      following_count
    }
  }
`);

export const getUserFollowersQuery = graphql(`
  query GetUserFollowers($id: ID!) {
    getUserById(id: $id) {
      firstName
      lastName
      imageUrl
      followers {
        id
        firstName
        lastName
        imageUrl
        has_following
        isIam
      }
    }
  }
`);

export const getUserFollowingQuery = graphql(`
  #graphql
  query GetUserFollowing($id: ID!) {
    getUserById(id: $id) {
      firstName
      lastName
      imageUrl
      following {
        id
        firstName
        lastName
        imageUrl
        has_following
        isIam
      }
    }
  }
`);

export const getRecommendations = graphql(`
  query GetRecommendations {
    getCurrentUser {
      recommendedUsers {
        id
        firstName
        lastName
        imageUrl
      }
    }
  }
`);
