"use client";
import { useCurrentUser } from "@/hooks/user";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { LogOut } from "lucide-react";
import DialogBox from "../Dialogbox";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "../ui/button";

const Profile = () => {
  const { user } = useCurrentUser();
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleLogout = useCallback(async () => {
    Cookies.remove("__token");
    toast.loading("Logout...", { id: "logout" });
    await queryClient.resetQueries({ queryKey: ["current-user"] });
    await queryClient.resetQueries({ queryKey: ["get-recommendations"] });
    await queryClient.resetQueries({ queryKey: ["all-tweets"] });
    await queryClient.resetQueries({ queryKey: ["get-user-by-id"] });
    toast.success("Logged out Success", { id: "logout" });
    setOpen(false);
  }, [queryClient]);

  if (!user) return null;
  const renderTrigger = () => (
    <div className="max-sm:w-[40px] flex items-center justify-between bg-gray-500/30 md:p-2 rounded-full">
      <div className="flex gap-2 items-center">
        <Image
          src={user.imageUrl as string}
          width={40}
          height={40}
          alt={`${user.firstName} ${user.lastName}`}
          className="rounded-full"
        />
        <span className="truncate hidden md:block">
          {user.firstName} {user.lastName}
        </span>
      </div>
      <LogOut size={20} className="hidden md:block" />
    </div>
  );

  return (
    <DialogBox
      title="Confirmation"
      Trigger={renderTrigger()}
      open={open}
      setOpen={setOpen}
      description="Are you sure you want to Logout?"
      className="max-w-[400px]"
    >
      <div className="grid grid-cols-2 gap-5 mt-10">
        <Button variant={"secondary"} onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button variant={"destructive"} onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </DialogBox>
  );
};

export default Profile;
