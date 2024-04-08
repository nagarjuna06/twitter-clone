"use client";
import { useCurrentUser } from "@/hooks/user";
import Image from "next/image";
import { Button } from "../ui/button";
import { Image as ImageIcon } from "lucide-react";
import { ChangeEvent, useCallback, useState } from "react";
import { useCreateTweet } from "@/hooks/tweet";
import graphqlClient from "@/lib/clients/graphql";
import { getPresignedUrlQuery } from "@/graphql/query/tweets";
import axios from "axios";
import toast from "react-hot-toast";

const CreateTweet = () => {
  const { user } = useCurrentUser();
  const [content, setContent] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const { mutateAsync } = useCreateTweet();
  const handleCreateTweet = useCallback(async () => {
    await mutateAsync({
      content,
      imageUrl,
    });
    setContent("");
    setImageUrl("");
  }, [mutateAsync, content, imageUrl]);

  const handleImageChange = useCallback(
    async (input: ChangeEvent<HTMLInputElement>) => {
      const file = input.target.files?.item(0) as File;

      toast.loading("Image is Uploading...", { id: "upload" });
      const { generatePresignedUrl } = await graphqlClient.request(
        getPresignedUrlQuery,
        { imageName: file.name, imageType: file.type }
      );
      if (generatePresignedUrl) {
        await axios.put(generatePresignedUrl, file, {
          headers: {
            "Content-Type": file.type,
          },
        });
        const url = new URL(generatePresignedUrl);
        setImageUrl(`${url.origin}${url.pathname}`);
        toast.success("Image Uploaded", { id: "upload" });
      }
    },
    []
  );
  if (!user) return null;

  return (
    <div className="p-5 flex items-start gap-3 border-b-2 border-secondary">
      <Image
        src={user.imageUrl as string}
        width={40}
        height={40}
        className="rounded-full"
        alt={`${user.firstName} ${user.lastName}`}
      />
      <div className="flex flex-col w-full gap-4">
        <textarea
          rows={1}
          className="bg-transparent p-1 outline-none resize-y"
          value={content}
          placeholder="What's Happening?"
          onChange={(e) => setContent(e.target.value)}
        />
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="creating-tweet"
            width={0}
            height={0}
            sizes="100vw"
            className="h-[300px] w-full object-cover rounded-2xl"
          />
        )}
        <div className="flex justify-between items-center">
          <label className="cursor-pointer">
            <ImageIcon size={20} className="text-primary" />
            <input
              type="file"
              hidden
              accept="image/png, image/gif, image/jpeg"
              onChange={handleImageChange}
            />
          </label>
          <Button
            className="bg-primary rounded-3xl self-end"
            disabled={!content}
            onClick={handleCreateTweet}
          >
            Tweet
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
