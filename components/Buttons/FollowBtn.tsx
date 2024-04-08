"use client";

import { useFollowUser, useUnFollowUser } from "@/hooks/user";
import { useCallback } from "react";
import { Button } from "../ui/button";

const FollowBtn = ({
  id,
  hasFollowing,
  isIam,
}: {
  id: string;
  hasFollowing: boolean;
  isIam: boolean;
}) => {
  const { mutateAsync: follow } = useFollowUser();
  const { mutateAsync: unFollow } = useUnFollowUser();
  const handleFollowUser = useCallback(async () => {
    await follow(id as string);
  }, [follow, id]);

  const handleUnFollowUser = useCallback(async () => {
    await unFollow(id as string);
  }, [unFollow, id]);

  if (isIam) return null;
  return hasFollowing ? (
    <Button className="bg-primary" onClick={handleUnFollowUser}>
      Unfollow
    </Button>
  ) : (
    <Button className="bg-primary" onClick={handleFollowUser}>
      Follow
    </Button>
  );
};

export default FollowBtn;
