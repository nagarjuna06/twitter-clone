"use client";
import { useCurrentUser } from "@/hooks/user";
import graphqlClient from "@/lib/clients/graphql";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useQueryClient } from "@tanstack/react-query";
import React, { useCallback } from "react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { verifyUserQuery } from "@/graphql/query/user";

const SignIn = () => {
  const { user } = useCurrentUser();
  const queryClient = useQueryClient();
  const onSuccess = useCallback(
    async (response: CredentialResponse) => {
      toast.loading("Logging...", { id: "login" });
      if (!response?.credential)
        return toast.error("Something went wrong!", { id: "login" });
      const { verifyUser } = await graphqlClient.request(verifyUserQuery, {
        token: response.credential,
      });
      if (verifyUser) {
        Cookies.set("__token", verifyUser, {
          expires: 30 * 24 * 60 * 60,
        });
        toast.success("Verify Success", { id: "login" });
        await queryClient.invalidateQueries({ queryKey: ["current-user"] });
        await queryClient.invalidateQueries({ queryKey: ["all-tweets"] });
        await queryClient.invalidateQueries({ queryKey: ["get-user-by-id"] });
      }
    },
    [queryClient]
  );
  if (user) return null;
  return (
    <div className="bg-gray-500/30 grid grid-cols-1 place-items-center p-4 gap-3 rounded-2xl">
      <p>New to Twitter?</p>
      <GoogleLogin useOneTap shape="pill" onSuccess={onSuccess} />
    </div>
  );
};

export default SignIn;
