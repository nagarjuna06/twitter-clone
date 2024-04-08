"use client";
import BtnBack from "@/components/BtnBack";
import SignIn from "@/components/SignIn";
import TweetCard from "@/components/TweetCard";

import { Tweet } from "@/gql/graphql";

import { formattedDate } from "@/lib/format-date";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import { CalendarDays, MapPin } from "lucide-react";
import Loading from "../loading";
import { useGetUserById } from "@/hooks/user";
import FollowBtn from "@/components/FollowBtn";
import Header from "@/components/Header";

const ProfilePage = () => {
  const { id } = useParams();
  const { userProfile, isLoading } = useGetUserById(id as string);

  if (isLoading) return <Loading />;
  if (!userProfile)
    return (
      <div className="flex justify-center h-full items-center">
        <SignIn />
      </div>
    );
  const name = `${userProfile.firstName} ${userProfile.lastName}`;
  return (
    <div>
      <Header>
        <p className="text-lg truncate">{name}</p>
        <p className="text-secondary/80 text-sm">
          {userProfile.tweets?.length} Tweets
        </p>
      </Header>
      {/* user image container */}
      <div className="p-5 flex flex-col gap-2 border-b-2 border-secondary max-sm:text-sm">
        <Image
          src={userProfile.imageUrl as string}
          alt={name}
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className="flex items-center justify-between">
          <p className="max-md:text-md">{name}</p>
          <FollowBtn
            isIam={userProfile.isIam as boolean}
            id={userProfile.id}
            hasFollowing={userProfile.has_following as boolean}
          />
        </div>
        <div className="flex flex-row flex-wrap gap-3 my-3 ">
          <div className="text-secondary/80 flex gap-2 items-center">
            <MapPin size={16} />
            <p>{userProfile.location ?? "location"}</p>
          </div>
          <div className="text-secondary/80 flex gap-2 items-center">
            <CalendarDays size={16} />
            <p>Joined {formattedDate(userProfile.createdAt, "MMMM yyyy")}</p>
          </div>
        </div>

        {/* followers and following count */}

        <div className="font-thin flex gap-4">
          <Link href={`/${userProfile?.id}/followers`}>
            <b className="font-bold">{userProfile.followers_count} </b>
            Follower{Number(userProfile.followers_count) > 1 ? "s" : ""}
          </Link>
          <Link href={`/${userProfile.id}/following`}>
            <b className="font-bold">{userProfile.following_count} </b>
            Following
          </Link>
        </div>
      </div>

      {/* tweets */}
      <div>
        {userProfile.tweets?.map((each, index) => (
          <TweetCard key={index} data={each as Tweet} />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
