"use client";
import Loading from "@/components/Loading";
import CreateTweet from "@/components/Tweet/CreateTweet";
import TweetCard from "@/components/Cards/TweetCard";
import { Tweet } from "@/gql/graphql";
import { useTweets } from "@/hooks/tweet";
import { Sparkles } from "lucide-react";

export default function Home() {
  const { tweets, isLoading } = useTweets();
  if (isLoading) return <Loading />;
  return (
    <div>
      <div className="border-b-2 border-secondary p-4 flex  items-center justify-between gap-5">
        <span>Home</span>
        <Sparkles size={24} className="text-primary" />
      </div>
      <CreateTweet />
      <div>
        {tweets?.map((each, index) =>
          each ? <TweetCard key={index} data={each as Tweet} /> : null
        )}
      </div>
    </div>
  );
}
