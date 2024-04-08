"use client";
import { User } from "@/gql/graphql";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import { Button } from "../ui/button";
import { useFollowUser, useUnFollowUser } from "@/hooks/user";
import FollowBtn from "../Buttons/FollowBtn";

const UserCard = ({ user }: { user: User }) => {
  const userFullName = `${user.firstName} ${user.lastName}`;
  const router = useRouter();
  return (
    <div className="border-b-2 border-secondary p-4 flex gap-4 items-center justify-between">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => router.push(`/${user.id}`)}
      >
        <Image
          src={user.imageUrl as string}
          width={40}
          height={40}
          alt={userFullName}
          className="rounded-full"
        />
        <p>{userFullName}</p>
      </div>
      <FollowBtn
        isIam={user.isIam as boolean}
        id={user.id}
        hasFollowing={user.has_following as boolean}
      />
    </div>
  );
};

export default UserCard;
