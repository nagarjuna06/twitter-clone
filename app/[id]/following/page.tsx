"use client";
import BtnBack from "@/components/BtnBack";
import UserCard from "@/components/UserCard";
import { User } from "@/gql/graphql";
import { useGetFollowingsList } from "@/hooks/user";
import { useParams } from "next/navigation";
import Loading from "../loading";

const FollowersPage = () => {
  const { id } = useParams();
  const { user, isLoading } = useGetFollowingsList(id as string);
  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="p-3 flex items-center gap-4 border-b-2 border-secondary">
        <BtnBack />
        <div>
          <p className="text-lg truncate">{`${user?.firstName} ${user?.lastName}`}</p>
          <p className="text-secondary/80 text-sm">
            {user?.following?.length} Following
          </p>
        </div>
      </div>
      <div>
        {user?.following?.map((following, index) => (
          <UserCard key={index} user={following as User} />
        ))}
      </div>
    </div>
  );
};

export default FollowersPage;
