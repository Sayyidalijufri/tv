"use client";
import Button from "@/components/Button";
import useChannelData from "@/hooks/useChannelData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Page() {
  const { channelShorts } = useChannelData();
  return (
    <div className="w-full flex flex-col gap-4">
      <ul className="flex gap-2">
        <li>
          <Button variant="dark" className="text-sm px-3 rounded-md">
            Latest
          </Button>
        </li>
        <li>
          <Button className="text-sm px-3 rounded-md">Popular</Button>
        </li>
        <li>
          <Button className="text-sm px-3 rounded-md">Oldest</Button>
        </li>
      </ul>
      <ul className="grid grid-cols-4 gap-4">
        {channelShorts?.shortResults?.map((shortList) => (
          <Link href={`/short?id=${shortList.videoId}`} key={shortList.videoId}>
            <div className="space-y-2">
              <Image
                src={shortList.thumbnail as string}
                alt={"video_thumbnail"}
                className="h-auto w-full rounded-xl"
                width={0}
                height={0}
                sizes="100vw"
              />
              <h3 className="line-clamp-2 leading-6">{shortList.title}</h3>
              <h3 className="text-[12px] text-gray-400 font-normal">
                {shortList.viewCount}
              </h3>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Page;
