"use client";

import { Tweet } from "@/gql/graphql";
import { useLikeTweet, useUnlikeTweet } from "@/hooks/tweet";
import { formatDistance } from "date-fns";
import { Bookmark, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import { Dot, Heart, Repeat2, Share } from "lucide-react";

const TweetCard = ({ data }: { data: Tweet }) => {
  const { mutateAsync: likeMutation } = useLikeTweet();
  const { mutateAsync: unlikeMutation } = useUnlikeTweet();
  const user = `${data.author?.firstName} ${data.author?.lastName}`;
  const handleLikeTweet = useCallback(async () => {
    try {
      await likeMutation(data.id);
    } catch (error) {
      return;
    }
  }, [likeMutation, data]);
  const handleUnlikeTweet = useCallback(async () => {
    try {
      await unlikeMutation(data.id);
    } catch (error) {
      return;
    }
  }, [unlikeMutation, data]);

  return (
    <div className="border-b-2 border-secondary p-5">
      <div className="flex gap-2 items-start w-full">
        {data.author?.imageUrl && (
          <Image
            src={data.author.imageUrl}
            alt={user}
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-full max-sm:w-[30px] w-[40px] h-auto"
          />
        )}
        <div className="flex flex-col gap-3 grow">
          <div className="flex flex-row max-sm:flex-col max-sm:items-start  items-center max-sm:text-sm">
            <Link href={`/${data.author?.id}`}>{user}</Link>
            <Dot size={15} className="max-sm:hidden" />
            <span className="text-sm text-secondary/80">
              {formatDistance(Number(data.createdAt), new Date(), {
                addSuffix: true,
              })}
            </span>
          </div>
          <p className="max-sm:text-sm">{data.content}</p>
          {data.imageUrl && (
            <Image
              src={data.imageUrl as string}
              alt="hello"
              width={0}
              height={0}
              sizes="100vw"
              className="h-full max-h-[300px] w-full object-cover rounded-2xl"
            />
          )}

          <div className="flex justify-between  text-secondary/80 text-xl p-2">
            <MessageCircle role="button" className="hover:stroke-primary" />
            <Repeat2 role="button" className="hover:stroke-green-500" />
            <div className="flex items-center gap-1">
              {data.has_liked ? (
                <Heart
                  role="button"
                  className="transform active:scale-50 duration-500  fill-red-700"
                  strokeWidth={0}
                  onClick={handleUnlikeTweet}
                />
              ) : (
                <Heart
                  role="button"
                  className="transform duration-500 active:scale-50 hover:stroke-red-700"
                  onClick={handleLikeTweet}
                />
              )}
              <span className="text-sm">{data.likes_count}</span>
            </div>
            <Bookmark role="button" className="hover:stroke-orange-600" />
            <Share role="button" className="hover:stroke-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
