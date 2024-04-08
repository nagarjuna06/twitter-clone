import { graphql } from "@/gql";

export const getAllTweetsQuery = graphql(`
  #graphql
  query GetAllTweets {
    getAllTweets {
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
  }
`);

export const getPresignedUrlQuery = graphql(`
  #graphql
  query GetPresignedUrl($imageName: String, $imageType: String) {
    generatePresignedUrl(imageName: $imageName, imageType: $imageType)
  }
`);
