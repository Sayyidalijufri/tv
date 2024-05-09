"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { VideoChapters } from "../types/SearchResults";
import { useState } from "react";
import VideoChapterCarousel from "./VideoChapterCarousel";

type Props = {
  data?: VideoChapters;
};

function VideoChapter({ data }: Props) {
  const [isChapterExpand, setIsChapterExpand] = useState(false);
  return (
    <div className="bg-indigo-50 transition cursor-pointer hover:bg-indigo-100 my-2 p-2 w-full rounded-md">
      <div
        className={`${
          !isChapterExpand ? "flex" : "hidden"
        } items-center justify-between w-full gap-2`}
      >
        <div className="flex items-center gap-2">
          <Image
            src={data?.thumbnail as string}
            width={52}
            height={28}
            className="rounded-md"
            alt="chapter_thumbnail"
          />
          <p className="text-sm line-clamp-1">{data?.title}</p>
        </div>
        <div
          className="flex items-center gap-2"
          onClick={() => setIsChapterExpand(true)}
        >
          <span className="text-sm whitespace-nowrap">
            {data?.numberChapters}
          </span>
          <ChevronDown />
        </div>
      </div>
      <div
        className={`${
          isChapterExpand ? "flex" : "hidden"
        } flex-col gap-2 w-full max-w-[748px]`}
      >
        <div
          className="flex items-center justify-between gap-2"
          onClick={() => setIsChapterExpand(false)}
        >
          <span className="text-sm line-clamp-1">
            {data?.numberExpandedChapters}
          </span>
          <ChevronUp />
        </div>
        <VideoChapterCarousel data={data?.expandedContent} />
      </div>
    </div>
  );
}

export default VideoChapter;
