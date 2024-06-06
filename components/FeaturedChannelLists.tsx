import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FeaturedChannels } from "@/types/Channel";
import { Button } from "./ui/button";

function FeaturedChannelLists({
  title,
  featuredChannelLists,
}: FeaturedChannels) {
  return (
    <div className="flex flex-col w-full border-b border-secondary pb-8">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <Carousel className="max-w-full">
        <CarouselContent>
          {featuredChannelLists?.map((list) => (
            <CarouselItem key={list.channelId} className="basis-1/4">
              <Link
                href={`/channel/${list.channelId}`}
                className="flex items-center justify-center flex-col gap-2 px-3"
              >
                <Image
                  width={103}
                  height={103}
                  alt="featured_channel_avatar"
                  className="rounded-full"
                  src={list.channelAvatar as string}
                />
                <h2 className="font-medium line-clamp-1">{list.channelName}</h2>
                <span className="text-sm text-secondary-text line-clamp-1">
                  {list.channelSubscriberCount}
                </span>
                <Button className="text-sm rounded-full px-4">Subscribe</Button>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
}

export default FeaturedChannelLists;
