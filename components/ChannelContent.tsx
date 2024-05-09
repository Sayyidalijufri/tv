import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

function ChannelContent({ data }: any) {
  return (
    <div className="flex flex-col w-full border-b border-secondary pb-8">
      <h3 className="font-bold text-lg mb-2">{data?.title?.runs?.[0]?.text}</h3>
      <Carousel className="max-w-full">
        <CarouselContent>
          {data?.title?.runs?.[0]?.text !== "Featured Channels"
            ? data?.content?.horizontalListRenderer?.items.map(
                (item: any, index: number) => (
                  <CarouselItem key={index} className="basis-1/4">
                    <Link
                      key={index}
                      href={`/watch?id=${item?.gridVideoRenderer?.videoId}`}
                    >
                      <div className="space-y-2">
                        <div className="flex relative">
                          <Image
                            src={
                              item?.gridVideoRenderer?.thumbnail?.thumbnails?.[
                                item?.gridVideoRenderer?.thumbnail?.thumbnails
                                  ?.length - 1
                              ]?.url
                            }
                            alt={""}
                            className="w-[auto] rounded-xl"
                            width={336}
                            height={188}
                          />
                          <p className=" bg-[#0003] backdrop-blur-2xl shadow-2xl text-white text-[10px] px-1 rounded-sm absolute bottom-1 right-2">
                            {
                              item?.gridVideoRenderer?.thumbnailOverlays?.[0]
                                ?.thumbnailOverlayTimeStatusRenderer?.text
                                ?.simpleText
                            }
                          </p>
                        </div>
                        <div className="w-full flex flex-col gap-1 text-sm font-semibold">
                          <h3 className="line-clamp-2 leading-6">
                            {item?.gridVideoRenderer?.title?.simpleText ||
                              item?.gridVideoRenderer?.title?.runs[0]?.text}
                          </h3>
                          <h3 className="text-[12px] text-gray-400 font-normal">
                            {
                              item?.gridVideoRenderer?.shortViewCountText
                                ?.simpleText
                            }{" "}
                            •{" "}
                            {
                              item?.gridVideoRenderer?.publishedTimeText
                                ?.simpleText
                            }
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                )
              )
            : data?.content?.horizontalListRenderer?.items?.map(
                (item: any, index: number) => (
                  <CarouselItem key={index} className="basis-1/4">
                    <Link
                      href={`/channel/${item?.gridChannelRenderer?.channelId}`}
                      className="flex items-center justify-center flex-col gap-2 px-3"
                    >
                      <Image
                        width={103}
                        height={103}
                        alt="feature_channel_avatar"
                        className="rounded-full"
                        src={
                          item?.gridChannelRenderer?.thumbnail?.thumbnails?.[
                            item?.gridChannelRenderer?.thumbnail?.thumbnails
                              ?.length - 1
                          ]?.url?.includes("http")
                            ? item?.gridChannelRenderer?.thumbnail
                                ?.thumbnails?.[
                                item?.gridChannelRenderer?.thumbnail?.thumbnails
                                  ?.length - 1
                              ]?.url
                            : `https:${
                                item?.gridChannelRenderer?.thumbnail
                                  ?.thumbnails?.[
                                  item?.gridChannelRenderer?.thumbnail
                                    ?.thumbnails?.length - 1
                                ]?.url
                              }`
                        }
                      />
                      <h2 className="font-medium line-clamp-1">
                        {item?.gridChannelRenderer?.title?.simpleText}
                      </h2>
                      <span className="text-sm text-secondary-text line-clamp-1">
                        {
                          item?.gridChannelRenderer?.subscriberCountText
                            ?.simpleText
                        }
                      </span>
                      <Button className="text-sm rounded-full px-4">
                        Subscribe
                      </Button>
                    </Link>
                  </CarouselItem>
                )
              )}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
}

export default ChannelContent;
