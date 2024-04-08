import { graphql } from "@/gql";

export const followUserMutation = graphql(`
  mutation FollowUser($id: ID!) {
    followUser(id: $id)
  }
`);

export const unFollowUserMutation = graphql(`
  mutation UnFollowUser($id: ID!) {
    unFollowUser(id: $id)
  }
`);
