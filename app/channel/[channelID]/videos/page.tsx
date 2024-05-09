"use client";
import Button from "@/components/Button";
import useChannelData from "@/hooks/useChannelData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Page() {
  const { channelVideos } = useChannelData();
  return (
    <>
      <ul className="flex gap-2">
        <li>
          <Button variant={"dark"}>Latest</Button>
        </li>
        <li>
          <Button variant={"dark"}>Popular</Button>
        </li>
        <li>
          <Button variant={"dark"}>Oldest</Button>
        </li>
      </ul>
      <div className="flex flex-wrap justify-between gap-5">
        {channelVideos?.contents?.twoColumnBrowseResultsRenderer?.tabs?.[1]?.tabRenderer?.content?.richGridRenderer?.contents?.map(
          (list: any, index: number) => (
            <Link
              key={index}
              href={`/watch?id=${list?.richItemRenderer?.content?.videoRenderer?.videoId}`}
            >
              <div className="space-y-2">
                <div className="flex relative">
                  <Image
                    src={
                      list?.richItemRenderer?.content?.videoRenderer?.thumbnail
                        ?.thumbnails?.[
                        list?.richItemRenderer?.content?.videoRenderer
                          ?.thumbnail?.thumbnails?.length - 1
                      ]?.url
                    }
                    alt={""}
                    className="w-[auto] rounded-xl"
                    width={336}
                    height={188}
                  />
                  <p className=" bg-[#0003] backdrop-blur-2xl shadow-2xl text-white text-[10px] px-1 rounded-sm absolute bottom-1 right-2">
                    {
                      list?.richItemRenderer?.content?.videoRenderer
                        ?.thumbnailOverlays?.[0]
                        ?.thumbnailOverlayTimeStatusRenderer?.text?.simpleText
                    }
                  </p>
                </div>
                <div className="w-full flex flex-col gap-1 text-sm font-semibold">
                  <h3 className="line-clamp-2 leading-6">
                    {list?.richItemRenderer?.content?.videoRenderer?.title
                      ?.simpleText ||
                      list?.richItemRenderer?.content?.videoRenderer?.title
                        ?.runs[0]?.text}
                  </h3>
                  <h3 className="text-[12px] text-gray-400 font-normal">
                    {
                      list?.richItemRenderer?.content?.videoRenderer
                        ?.shortViewCountText?.simpleText
                    }{" "}
                    •{" "}
                    {
                      list?.richItemRenderer?.content?.videoRenderer
                        ?.publishedTimeText?.simpleText
                    }
                  </h3>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </>
  );
}

export default Page;
