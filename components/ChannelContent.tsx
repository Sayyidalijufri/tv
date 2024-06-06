import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import { ListSection } from "@/types/Channel";

function ChannelContent({
  isReel,
  isShelfVideo,
  title,
  videoLists,
}: ListSection) {
  return (
    <div className="flex flex-col w-full border-b border-secondary pb-6 gap-4">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <Carousel className="max-w-full">
        <CarouselContent>
          {isShelfVideo &&
            videoLists &&
            videoLists.map((videoList) => (
              <CarouselItem key={videoList.videoId} className="basis-1/4">
                <Link href={`/watch?id=${videoList.videoId}`}>
                  <div className="space-y-2">
                    <div className="flex relative">
                      <Image
                        src={videoList.thumbnail as string}
                        alt={"video_thumbnail"}
                        className="w-[auto] rounded-xl"
                        width={336}
                        height={188}
                      />
                      <p className="bg-[#00000083] backdrop-blur-2xl shadow-2xl text-white text-[10px] px-1 rounded-sm absolute bottom-1 right-2">
                        {videoList.durationText}
                      </p>
                    </div>
                    <div className="w-full flex flex-col gap-1 text-sm font-semibold">
                      <h3 className="line-clamp-2 leading-6">
                        {videoList.title}
                      </h3>
                      <h3 className="text-[12px] text-gray-400 font-normal">
                        {`${videoList.viewCount} • ${videoList.publishedDate}`}
                      </h3>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          {isReel &&
            videoLists &&
            videoLists.map((videoList) => (
              <CarouselItem key={videoList.videoId} className="basis-1/4">
                <Link href={`/short?id=${videoList.videoId}`}>
                  <div className="space-y-2">
                    <Image
                      src={videoList.thumbnail as string}
                      alt={"reel_video_thumbnail"}
                      className="w-full h-auto rounded-xl"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                    <h3 className="line-clamp-2 leading-6 font-medium">
                      {videoList.title}
                    </h3>
                    <h3 className="text-sm text-gray-400 font-normal">
                      {videoList.viewCount}
                    </h3>
                  </div>
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

export default ChannelContent;
