"use client";
import { PinnedVideo } from "@/types/Channel";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  data: PinnedVideo;
};

const URL_REGEX =
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;

function ChannelPin({ data }: Props) {
  const [videoUrl, setVideoUrl] = useState<any>();
  const [pinVideoReadMore, setPinVideoReadMore] = useState(false);
  useEffect(() => {
    const fetchVideo = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/video/${data.videoId}`
      );
      const videoStreamRes = await res.json();
      setVideoUrl(
        videoStreamRes?.streamingData?.formats?.[
          videoStreamRes?.streamingData?.formats?.length - 1
        ]?.url
      );
      return videoStreamRes?.streamingData?.formats?.[
        videoStreamRes?.streamingData?.formats?.length - 1
      ]?.url;
    };
    fetchVideo();
  }, [data?.videoId]);

  return (
    <div className="flex flex-col md:flex-row gap-5 mb-8">
      <video
        src={videoUrl || ""}
        className="aspect-video rounded-xl"
        controls
        autoPlay
      ></video>
      <div className="flex flex-col gap-1">
        <h4 className="truncate font-semibold">{data.title}</h4>
        <p className="text-[#aaa] my-4">
          {data.viewCount} • {data.publishedTime}
        </p>
        <p
          className={`font-medium ${
            !pinVideoReadMore && "line-clamp-5"
          } whitespace-pre-line`}
        >
          {data.description?.split(" ").map((word) => {
            return word.match(URL_REGEX)
              ? word && (
                  <Link key={word} href={word} className="text-sky-500">
                    {word}{" "}
                  </Link>
                )
              : word + " ";
          })}
        </p>
        <a
          className="font-semibold cursor-pointer mt-2"
          onClick={() => setPinVideoReadMore(!pinVideoReadMore)}
        >
          READ MORE
        </a>
      </div>
    </div>
  );
}

export default ChannelPin;
