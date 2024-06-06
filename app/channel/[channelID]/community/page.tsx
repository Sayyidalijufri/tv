"use client";
import useChannelData from "@/hooks/useChannelData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MessageSquareText, ThumbsDown, ThumbsUp } from "lucide-react";

const URL_REGEX =
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;

function Page() {
  const { channelCommunities } = useChannelData();
  const [pinVideoReadMore, setPinVideoReadMore] = useState(false);
  return (
    <div className="w-full flex flex-col gap-4">
      <ul className="flex flex-col gap-6">
        {channelCommunities?.communitiyResults?.map((post) => (
          <div className="flex gap-3" key={post.postId}>
            <Image
              src={post.author?.avatar as string}
              alt={"author_avatar"}
              className="rounded-xl h-[40px]"
              width={40}
              height={40}
            />
            <div className="w-full flex flex-col gap-2">
              <Link href={`/channel/${post.author?.channelId}`}>
                <div className="flex items-center gap-2 text-sm">
                  <h2 className="font-semibold">{post.author?.name}</h2>
                  <span className="text-secondary-text">
                    {post.publishedTime}
                  </span>
                </div>
              </Link>
              <div>
                <p
                  className={`${
                    !pinVideoReadMore && "line-clamp-3"
                  } whitespace-pre-line`}
                >
                  {post.description?.split(" ").map((word) => {
                    return word.match(URL_REGEX) ? word && (
                      <Link key={word} href={word} className="text-sky-500">
                        {word}{" "}
                      </Link>
                    ) : (
                      word + " "
                    );
                  })}
                </p>
                <a
                  className="font-semibold cursor-pointer mt-2 text-secondary-text"
                  onClick={() => setPinVideoReadMore(!pinVideoReadMore)}
                >
                  {pinVideoReadMore ? "SHOW LESS" : "READ MORE"}
                </a>
              </div>
              {typeof post.attachment === "string" && (
                <Image
                  width={638}
                  height={638}
                  alt="post_image"
                  className="rounded-lg"
                  src={post.attachment as string}
                />
              )}
              {post.attachment &&
                typeof post.attachment !== "string" &&
                !(post.attachment instanceof Array) && (
                  <Link href={`/watch?id=${post.attachment.videoId}`}>
                    <div className="flex gap-3">
                      <div className="relative">
                        <Image
                          width={210}
                          height={118}
                          alt="video_image"
                          className="rounded-lg"
                          src={post.attachment.thumbnail as string}
                        />
                        <p className="bg-[#00000083] backdrop-blur-2xl shadow-2xl text-white text-[10px] px-1 rounded-sm absolute bottom-1 right-2">
                          {post.attachment.durationText}
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <h2>{post.attachment.title}</h2>
                        <div className="flex items-center gap-2 text-sm text-secondary-text">
                          <span>{post.attachment.ownerText}</span>•
                          <span>{post.attachment.viewCount}</span>•
                          <span>{post.attachment.publishedTime}</span>
                        </div>
                        <p
                          className={`text-sm text-secondary-text mt-3 ${
                            !pinVideoReadMore && "line-clamp-2"
                          } whitespace-normal`}
                        >
                          {post.attachment.description
                            ?.split(" ")
                            .map((word) => {
                              return word.match(URL_REGEX) ? (
                                <Link
                                  key={word}
                                  href={word}
                                  className="text-sky-500"
                                >
                                  {word}{" "}
                                </Link>
                              ) : (
                                word + " "
                              );
                            })}
                        </p>
                      </div>
                    </div>
                  </Link>
                )}
              {post.attachment && post.attachment instanceof Array && (
                <Carousel className="max-w-full">
                  <CarouselContent>
                    {post.attachment?.map(
                      (img, index) =>
                        img && (
                          <CarouselItem key={index}>
                            <Image
                              width={638}
                              height={638}
                              alt="post_image"
                              src={img as string}
                              className="rounded-lg"
                            />
                          </CarouselItem>
                        )
                    )}
                  </CarouselContent>
                  <CarouselNext />
                  <CarouselPrevious />
                </Carousel>
              )}
              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-2 cursor-pointer">
                  <ThumbsUp className="size-6" />
                  <span className="text-sm">{post.numberLikes}</span>
                </div>
                <ThumbsDown />
                <Link href={`/post?id=${post.postId}`}>
                  <div className="flex items-center gap-2">
                    <MessageSquareText className="size-6" />
                    <span className="text-sm">{post.numberComments}</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Page;
