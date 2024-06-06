"use client";
import useChannelData from "@/hooks/useChannelData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Page() {
  const { channelPodcasts } = useChannelData();
  return (
    <div className="w-full flex flex-col gap-4">
      <ul className="grid grid-cols-4 gap-4">
        {channelPodcasts?.podcastResults?.map((podcastList) => (
          <Link
            href={`/playistId?id=${podcastList.podcastId}`}
            key={podcastList.podcastId}
          >
            <div className="space-y-2">
              <div className="flex relative w-fit">
                <Image
                  src={podcastList.thumbnail as string}
                  alt={"podcast_thumbnail"}
                  className="rounded-xl"
                  width={200}
                  height={200}
                />
                <p className="bg-[#00000083] backdrop-blur-2xl shadow-2xl text-white text-[10px] px-1 rounded-sm absolute bottom-1 right-2">
                  {podcastList.numberEpisodes}
                </p>
              </div>
              <div className="w-full flex flex-col gap-1 text-sm font-semibold">
                <h3 className="line-clamp-2 leading-6">{podcastList.title}</h3>
                <h3 className="text-[12px] text-gray-400 font-normal">
                  View full podcasts
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Page;
