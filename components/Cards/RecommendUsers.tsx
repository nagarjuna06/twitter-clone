"use client";

import { useRecommendationsUsers } from "@/hooks/user";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const RecommendUsers = () => {
  const { recommendations } = useRecommendationsUsers();
  if (!recommendations?.length) return null;
  return (
    <div>
      <p className="text-center">Do you Know?</p>
      <div className="max-h-[450px] overflow-y-auto">
        {recommendations.map((each, index) => (
          <div
            key={index}
            className="text-center bg-secondary p-3 rounded-2xl my-3"
          >
            <div className="flex gap-2 items-center">
              <Image
                src={each?.imageUrl as string}
                alt={`${each?.firstName} ${each?.lastName}`}
                width={40}
                height={40}
                className="rounded-full"
              />
              <p>{`${each?.firstName} ${each?.lastName}`}</p>
            </div>
            <Link href={`/${each?.id}`}>
              <Button className="bg-primary px-5 rounded-full">View</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendUsers;
