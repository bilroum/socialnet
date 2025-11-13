"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";
import { createRouteMatcher } from "@clerk/nextjs/server";
import toast from "react-hot-toast";
import { toggleFollow } from "@/actions/user.action";

export default function FollowButton({ userId }: { userId: string }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleFollow = async () => {
    setIsLoading(true);

    try {
      await toggleFollow(userId);
      toast.success("Followed succesfully");
    } catch (error) {
      console.log("Error follow: ", error);
      toast.error("Could not follow the user");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Button
      onClick={handleFollow}
      size={"sm"}
      variant={"secondary"}
      disabled={isLoading}
      className="w-20"
    >
      {isLoading ? <Loader2Icon className="w.4 h-4 animate-spin" /> : "Follow"}
    </Button>
  );
}
