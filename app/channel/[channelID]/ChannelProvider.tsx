"use client";
import { Channel } from "@/types/Channel";
import Link from "next/link";
import Button from "@/components/Button";
import Image from "next/image";
import useChannelData from "@/hooks/useChannelData";
import { useEffect } from "react";
import { ChannelVideos } from "@/types/ChannelVideos";
import { ChannelShorts } from "@/types/ChannelShorts";
import { ChannelLives } from "@/types/ChannelLives";
import { ChannelPodcasts } from "@/types/ChannelPodcasts";
import { ChannelPlaylists } from "@/types/ChannelPlaylists";
import { ChannelCommunities } from "@/types/ChannelCommunities";

type Props = {
  data: [
    Channel,
    ChannelVideos,
    ChannelShorts,
    ChannelLives,
    ChannelPodcasts,
    ChannelPlaylists,
    ChannelCommunities
  ];
  children: React.ReactNode;
};

function ChannelProvider({ data, children }: Props) {
  const {
    setChannelData,
    setChannelVideos,
    setChannelShorts,
    setChannelLives,
    setChannelPodcasts,
    setChannelPlaylists,
    setChannelCommunities,
  } = useChannelData();
  useEffect(() => {
    setChannelData(data[0]);
    setChannelVideos(data[1]);
    setChannelShorts(data[2]);
    setChannelLives(data[3]);
    setChannelPodcasts(data[4]);
    setChannelPlaylists(data[5]);
    setChannelCommunities(data[6]);
  }, [
    data,
    setChannelData,
    setChannelVideos,
    setChannelShorts,
    setChannelLives,
    setChannelPodcasts,
    setChannelPlaylists,
    setChannelCommunities,
  ]);
  return (
    <div className="max-w-7xl w-full mx-auto flex flex-col gap-4">
      <div className="flex justify-center w-full flex-col gap-7">
        <div
          className={`w-full rounded-xl h-[210px] bg-cover bg-no-repeat bg-center`}
          style={{
            backgroundImage: `url('${data[0].headerResults?.channelBanner}')`,
          }}
        />

        <div className="grid grid-cols-[160px_1fr] max-w-7xl gap-8 justify-start items-center w-full">
          <Image
            alt="channel_avatar"
            width={160}
            height={160}
            src={data[0].headerResults?.channelAvatar as string}
            className="rounded-full"
          />
          <div className="flex flex-col gap-3">
            <p className="text-4xl font-bold text-wrap">
              {data[0].headerResults?.channelName}
            </p>
            <p className="text-[#aaa]">
              {data[0].headerResults?.channelUsername}・
              {data[0].headerResults?.channelSubscriberCount}・
              {data[0].headerResults?.channelVideosCount}
            </p>
            <p className="line-clamp-1 text-[#aaa] whitespace-pre-line w-4/6 overflow-hidden text-ellipsis">
              {data[0].headerResults?.channelDescription}
            </p>
            {data[0].headerResults?.channelLinks?.firstLink && (
              <p className="flex gap-1">
                <Link
                  href={
                    data[0].headerResults?.channelLinks?.firstLink as string
                  }
                  target="_blank"
                  className="text-blue-400"
                >
                  {data[0].headerResults?.channelLinks?.firstLink}
                </Link>{" "}
                {data[0].headerResults?.channelLinks?.more}
              </p>
            )}
            <Button variant={"dark"} className="w-fit rounded-full px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <ul className="flex gap-6 border-b-2 border-secondary sticky top-0 bg-white z-50 my-4">
        {data[0].bodyResults?.tabLists?.map((tab) => (
          <Link href={`/channel/${tab.link}`} key={tab.title}>
            <li className="pb-3 cursor-pointer">{tab.title}</li>
          </Link>
        ))}
      </ul>
      {children}
    </div>
  );
}

export default ChannelProvider;
