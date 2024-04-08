"use client";
import {
  followUserMutation,
  unFollowUserMutation,
} from "@/graphql/mutation/user";
import {
  getCurrentUserQuery,
  getRecommendations,
  getUserByIdQuery,
  getUserFollowersQuery,
  getUserFollowingQuery,
} from "@/graphql/query/user";
import graphqlClient from "@/lib/clients/graphql";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCurrentUser = () => {
  const query = useQuery({
    queryKey: ["current-user"],
    queryFn: async () => await graphqlClient.request(getCurrentUserQuery),
  });

  return { ...query, user: query.data?.getCurrentUser };
};

export const useFollowUser = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["follow-user"],
    mutationFn: (id: string) =>
      graphqlClient.request(followUserMutation, { id }),
    onMutate: () => toast.loading("Following User...", { id: "follow-user" }),
    onSuccess: () => {
      toast.success("User Followed ", { id: "follow-user" });
      queryClient.invalidateQueries({
        queryKey: ["get-user-by-id"],
      });
      queryClient.invalidateQueries({
        queryKey: ["get-followers-list"],
      });
      queryClient.invalidateQueries({
        queryKey: ["get-followings-list"],
      });
      queryClient.invalidateQueries({
        queryKey: ["get-recommendations"],
      });
    },
  });

  return mutation;
};

export const useUnFollowUser = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["unfollow-user"],
    mutationFn: (id: string) =>
      graphqlClient.request(unFollowUserMutation, { id }),
    onMutate: () =>
      toast.loading("Un-following User...", { id: "unfollow-user" }),
    onSuccess: () => {
      toast.success("User Un-followed ", { id: "unfollow-user" });
      queryClient.invalidateQueries({
        queryKey: ["get-user-by-id"],
      });
      queryClient.invalidateQueries({
        queryKey: ["get-followers-list"],
      });
      queryClient.invalidateQueries({
        queryKey: ["get-followings-list"],
      });
      queryClient.invalidateQueries({
        queryKey: ["get-recommendations"],
      });
    },
  });
  return mutation;
};

export const useGetUserById = (id: string) => {
  const query = useQuery({
    queryKey: ["get-user-by-id", id],
    queryFn: async () => await graphqlClient.request(getUserByIdQuery, { id }),
  });

  return { ...query, userProfile: query.data?.getUserById };
};

export const useRecommendationsUsers = () => {
  const query = useQuery({
    queryKey: ["get-recommendations"],
    queryFn: async () => await graphqlClient.request(getRecommendations),
  });

  return {
    query,
    recommendations: query.data?.getCurrentUser?.recommendedUsers,
  };
};

export const useGetFollowersList = (id: string) => {
  const query = useQuery({
    queryKey: ["get-followers-list", id],
    queryFn: async () =>
      await graphqlClient.request(getUserFollowersQuery, { id }),
  });
  return {
    ...query,
    user: query.data?.getUserById,
  };
};

export const useGetFollowingsList = (id: string) => {
  const query = useQuery({
    queryKey: ["get-followings-list", id],
    queryFn: async () =>
      await graphqlClient.request(getUserFollowingQuery, { id }),
  });
  return {
    ...query,
    user: query.data?.getUserById,
  };
};
