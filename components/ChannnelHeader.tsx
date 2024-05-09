"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Button from "./Button";
import Image from "next/image";
import useChannelData from "@/hooks/useChannelData";

type Props = {
  channel: any;
  channelVideos: any;
};

function ChannnelHeader({ channel, channelVideos }: Props) {
  const { setChannelData, setChannelVideos } = useChannelData();

  useEffect(() => {
    setChannelData(channel);
    setChannelVideos(channelVideos);
  }, [channel, channelVideos, setChannelData, setChannelVideos]);
  return (
    <>
      <div className="flex justify-center w-full flex-col gap-7">
        <div
          className={`w-full rounded-xl h-[210px] bg-cover bg-no-repeat bg-center`}
          style={{
            backgroundImage: `url('${channel?.header?.c4TabbedHeaderRenderer?.banner?.thumbnails?.[3]?.url}')`,
          }}
        />

        <div className="grid grid-cols-[160px_1fr] max-w-7xl gap-8 justify-start items-center w-full">
          <Image
            alt="channel_avatar"
            width={160}
            height={160}
            src={
              channel?.header?.c4TabbedHeaderRenderer?.avatar?.thumbnails?.[2]
                ?.url
            }
            className="rounded-full"
          />
          <div className="flex flex-col gap-3">
            <p className="text-4xl font-bold text-wrap">
              {channel?.header?.c4TabbedHeaderRenderer?.title}
            </p>
            <p className="text-[#aaa]">
              {
                channel?.header?.c4TabbedHeaderRenderer?.channelHandleText
                  ?.runs?.[0]?.text
              }
              ・
              {
                channel?.header?.c4TabbedHeaderRenderer?.subscriberCountText
                  ?.accessibility?.accessibilityData?.label
              }
              ・
              {
                channel?.header?.c4TabbedHeaderRenderer?.videosCountText
                  ?.runs?.[0]?.text
              }{" "}
              videos
            </p>
            <p className="line-clamp-1 text-[#aaa]">
              {channel?.header?.c4TabbedHeaderRenderer?.tagline
                ?.channelTaglineRenderer?.content +
                channel?.header?.c4TabbedHeaderRenderer?.tagline
                  ?.channelTaglineRenderer?.moreLabel}
            </p>
            <p className="flex gap-1">
              <a
                href="https://iqracartoon.com/"
                target="_blank"
                className="text-blue-400"
              >
                {
                  channel?.header?.c4TabbedHeaderRenderer?.headerLinks
                    ?.channelHeaderLinksViewModel?.firstLink?.content
                }
              </a>
              {
                channel?.header?.c4TabbedHeaderRenderer?.headerLinks
                  ?.channelHeaderLinksViewModel?.more?.content
              }
            </p>
            <Button variant={"dark"} className="w-fit rounded-full px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <ul className="flex gap-6 border-b-2 border-secondary sticky top-0 bg-white z-50">
        {channel?.contents?.twoColumnBrowseResultsRenderer?.tabs?.map(
          (tab: any, index: number) => {
            if (tab?.tabRenderer) {
              return (
                <Link
                  href={
                    tab?.tabRenderer?.title === "Home"
                      ? `/channel/${channel?.header?.c4TabbedHeaderRenderer?.channelId}`
                      : `/channel/${
                          channel?.header?.c4TabbedHeaderRenderer?.channelId
                        }/${tab?.tabRenderer?.title?.toLowerCase() || ""}`
                  }
                  key={index}
                >
                  <li className="pb-3 cursor-pointer">
                    {tab?.tabRenderer?.title}
                  </li>
                </Link>
              );
            }
            return null;
          }
        )}
      </ul>
    </>
  );
}

export default ChannnelHeader;
