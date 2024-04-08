import { graphql } from "@/gql";

export const createTweetMutation = graphql(`
  #graphql
  mutation CreateTweet($payload: TweetInput) {
    createTweet(input: $payload)
  }
`);

export const likeTweetMutation = graphql(`
  mutation LikeTweet($tweetId: ID!) {
    likeTweet(tweetId: $tweetId)
  }
`);

export const unLikeTweetMutation = graphql(`
  mutation UnLikeTweet($tweetId: ID!) {
    unlikeTweet(tweetId: $tweetId)
  }
`);
