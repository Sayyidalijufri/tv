"use client";
import Button from "@/components/Button";
import useChannelData from "@/hooks/useChannelData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Page() {
  const { channelPlaylists } = useChannelData();
  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="font-semibold">Created playlists</h2>
      <ul className="grid grid-cols-4 gap-4">
        {channelPlaylists?.playlistResults?.map((playlist) => (
          <Link
            href={`/playist?id=${playlist.playistId}`}
            key={playlist.playistId}
          >
            <div className="space-y-2">
              <div className="flex relative">
                <Image
                  src={playlist.thumbnail as string}
                  alt={"playist_thumbnail"}
                  className="w-[auto] rounded-xl"
                  width={336}
                  height={188}
                />
                <p className="bg-[#00000083] backdrop-blur-2xl shadow-2xl text-white text-[10px] px-1 rounded-sm absolute bottom-1 right-2">
                  {playlist.videosCountText}
                </p>
              </div>
              <div className="w-full flex flex-col gap-1 text-sm font-semibold">
                <h3 className="line-clamp-2 leading-6">{playlist.title}</h3>
                <h3 className="text-[12px] text-gray-400 font-normal">
                  View full playlist
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
