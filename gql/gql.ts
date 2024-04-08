/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  #graphql\n  mutation CreateTweet($payload: TweetInput) {\n    createTweet(input: $payload)\n  }\n": types.CreateTweetDocument,
    "\n  mutation LikeTweet($tweetId: ID!) {\n    likeTweet(tweetId: $tweetId)\n  }\n": types.LikeTweetDocument,
    "\n  mutation UnLikeTweet($tweetId: ID!) {\n    unlikeTweet(tweetId: $tweetId)\n  }\n": types.UnLikeTweetDocument,
    "\n  mutation FollowUser($id: ID!) {\n    followUser(id: $id)\n  }\n": types.FollowUserDocument,
    "\n  mutation UnFollowUser($id: ID!) {\n    unFollowUser(id: $id)\n  }\n": types.UnFollowUserDocument,
    "\n  #graphql\n  query GetAllTweets {\n    getAllTweets {\n      id\n      content\n      imageUrl\n      has_liked\n      likes_count\n      createdAt\n      author {\n        id\n        firstName\n        lastName\n        imageUrl\n      }\n    }\n  }\n": types.GetAllTweetsDocument,
    "\n  #graphql\n  query GetPresignedUrl($imageName: String, $imageType: String) {\n    generatePresignedUrl(imageName: $imageName, imageType: $imageType)\n  }\n": types.GetPresignedUrlDocument,
    "\n  query VerifyUser($token: String!) {\n    verifyUser(token: $token)\n  }\n": types.VerifyUserDocument,
    "\n  #graphql\n  query CurrentUser {\n    getCurrentUser {\n      id\n      email\n      imageUrl\n      firstName\n      lastName\n    }\n  }\n": types.CurrentUserDocument,
    "\n  query GetUserById($id: ID!) {\n    getUserById(id: $id) {\n      id\n      email\n      imageUrl\n      firstName\n      lastName\n      description\n      location\n      createdAt\n      isIam\n      tweets {\n        id\n        content\n        imageUrl\n        has_liked\n        likes_count\n        createdAt\n        author {\n          id\n          firstName\n          lastName\n          imageUrl\n        }\n      }\n      followers_count\n      has_following\n      following_count\n    }\n  }\n": types.GetUserByIdDocument,
    "\n  query GetUserFollowers($id: ID!) {\n    getUserById(id: $id) {\n      firstName\n      lastName\n      imageUrl\n      followers {\n        id\n        firstName\n        lastName\n        imageUrl\n        has_following\n        isIam\n      }\n    }\n  }\n": types.GetUserFollowersDocument,
    "\n  #graphql\n  query GetUserFollowing($id: ID!) {\n    getUserById(id: $id) {\n      firstName\n      lastName\n      imageUrl\n      following {\n        id\n        firstName\n        lastName\n        imageUrl\n        has_following\n        isIam\n      }\n    }\n  }\n": types.GetUserFollowingDocument,
    "\n  query GetRecommendations {\n    getCurrentUser {\n      recommendedUsers {\n        id\n        firstName\n        lastName\n        imageUrl\n      }\n    }\n  }\n": types.GetRecommendationsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  mutation CreateTweet($payload: TweetInput) {\n    createTweet(input: $payload)\n  }\n"): (typeof documents)["\n  #graphql\n  mutation CreateTweet($payload: TweetInput) {\n    createTweet(input: $payload)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LikeTweet($tweetId: ID!) {\n    likeTweet(tweetId: $tweetId)\n  }\n"): (typeof documents)["\n  mutation LikeTweet($tweetId: ID!) {\n    likeTweet(tweetId: $tweetId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UnLikeTweet($tweetId: ID!) {\n    unlikeTweet(tweetId: $tweetId)\n  }\n"): (typeof documents)["\n  mutation UnLikeTweet($tweetId: ID!) {\n    unlikeTweet(tweetId: $tweetId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation FollowUser($id: ID!) {\n    followUser(id: $id)\n  }\n"): (typeof documents)["\n  mutation FollowUser($id: ID!) {\n    followUser(id: $id)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UnFollowUser($id: ID!) {\n    unFollowUser(id: $id)\n  }\n"): (typeof documents)["\n  mutation UnFollowUser($id: ID!) {\n    unFollowUser(id: $id)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query GetAllTweets {\n    getAllTweets {\n      id\n      content\n      imageUrl\n      has_liked\n      likes_count\n      createdAt\n      author {\n        id\n        firstName\n        lastName\n        imageUrl\n      }\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  query GetAllTweets {\n    getAllTweets {\n      id\n      content\n      imageUrl\n      has_liked\n      likes_count\n      createdAt\n      author {\n        id\n        firstName\n        lastName\n        imageUrl\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query GetPresignedUrl($imageName: String, $imageType: String) {\n    generatePresignedUrl(imageName: $imageName, imageType: $imageType)\n  }\n"): (typeof documents)["\n  #graphql\n  query GetPresignedUrl($imageName: String, $imageType: String) {\n    generatePresignedUrl(imageName: $imageName, imageType: $imageType)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query VerifyUser($token: String!) {\n    verifyUser(token: $token)\n  }\n"): (typeof documents)["\n  query VerifyUser($token: String!) {\n    verifyUser(token: $token)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query CurrentUser {\n    getCurrentUser {\n      id\n      email\n      imageUrl\n      firstName\n      lastName\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  query CurrentUser {\n    getCurrentUser {\n      id\n      email\n      imageUrl\n      firstName\n      lastName\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUserById($id: ID!) {\n    getUserById(id: $id) {\n      id\n      email\n      imageUrl\n      firstName\n      lastName\n      description\n      location\n      createdAt\n      isIam\n      tweets {\n        id\n        content\n        imageUrl\n        has_liked\n        likes_count\n        createdAt\n        author {\n          id\n          firstName\n          lastName\n          imageUrl\n        }\n      }\n      followers_count\n      has_following\n      following_count\n    }\n  }\n"): (typeof documents)["\n  query GetUserById($id: ID!) {\n    getUserById(id: $id) {\n      id\n      email\n      imageUrl\n      firstName\n      lastName\n      description\n      location\n      createdAt\n      isIam\n      tweets {\n        id\n        content\n        imageUrl\n        has_liked\n        likes_count\n        createdAt\n        author {\n          id\n          firstName\n          lastName\n          imageUrl\n        }\n      }\n      followers_count\n      has_following\n      following_count\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUserFollowers($id: ID!) {\n    getUserById(id: $id) {\n      firstName\n      lastName\n      imageUrl\n      followers {\n        id\n        firstName\n        lastName\n        imageUrl\n        has_following\n        isIam\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetUserFollowers($id: ID!) {\n    getUserById(id: $id) {\n      firstName\n      lastName\n      imageUrl\n      followers {\n        id\n        firstName\n        lastName\n        imageUrl\n        has_following\n        isIam\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query GetUserFollowing($id: ID!) {\n    getUserById(id: $id) {\n      firstName\n      lastName\n      imageUrl\n      following {\n        id\n        firstName\n        lastName\n        imageUrl\n        has_following\n        isIam\n      }\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  query GetUserFollowing($id: ID!) {\n    getUserById(id: $id) {\n      firstName\n      lastName\n      imageUrl\n      following {\n        id\n        firstName\n        lastName\n        imageUrl\n        has_following\n        isIam\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetRecommendations {\n    getCurrentUser {\n      recommendedUsers {\n        id\n        firstName\n        lastName\n        imageUrl\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetRecommendations {\n    getCurrentUser {\n      recommendedUsers {\n        id\n        firstName\n        lastName\n        imageUrl\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;