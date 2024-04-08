import {
  createTweetMutation,
  likeTweetMutation,
  unLikeTweetMutation,
} from "@/graphql/mutation/tweet";
import { getAllTweetsQuery } from "@/graphql/query/tweets";
import graphqlClient from "@/lib/clients/graphql";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { TweetInput } from "@/gql/graphql";
export const useCreateTweet = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["create-tweet"],
    mutationFn: (payload: TweetInput) =>
      graphqlClient.request(createTweetMutation, {
        payload,
      }),
    onMutate: () => toast.loading("Creating Tweet...", { id: "create-tweet" }),
    onSuccess: () => {
      toast.success("Tweet Created ", { id: "create-tweet" });
      queryClient.invalidateQueries({ queryKey: ["all-tweets"] });
    },
  });
  return mutation;
};

export const useTweets = () => {
  const query = useQuery({
    queryKey: ["all-tweets"],
    queryFn: () => graphqlClient.request(getAllTweetsQuery),
  });

  return { ...query, tweets: query.data?.getAllTweets };
};

export const useLikeTweet = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["like-tweet"],
    mutationFn: (tweetId: string) =>
      graphqlClient.request(likeTweetMutation, { tweetId }),
    onMutate: () => toast.loading("Liking Tweet...", { id: "like-tweet" }),
    onSuccess: () => {
      toast.success("Tweet Liked ", { id: "like-tweet" });
      queryClient.invalidateQueries({ queryKey: ["all-tweets"] });
      queryClient.invalidateQueries({ queryKey: ["get-user-by-id"] });
    },
    onError: (err: any) => {
      toast.error("Unauthorized", { id: "like-tweet" });
    },
  });
  return mutation;
};

export const useUnlikeTweet = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["unlike-tweet"],
    mutationFn: (tweetId: string) =>
      graphqlClient.request(unLikeTweetMutation, { tweetId }),
    onMutate: () => toast.loading("Un-Liking Tweet...", { id: "unlike-tweet" }),
    onSuccess: () => {
      toast.success("Tweet Un-Liked ", { id: "unlike-tweet" });
      queryClient.invalidateQueries({ queryKey: ["all-tweets"] });
      queryClient.invalidateQueries({ queryKey: ["get-user-by-id"] });
    },
  });
  return mutation;
};
