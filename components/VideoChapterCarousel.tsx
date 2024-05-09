import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExpandedChaptersContent } from "@/types/SearchResults";
import Image from "next/image";

type Props = {
  data?: ExpandedChaptersContent[];
};

function VideoChapterCarousel({ data }: Props) {
  return (
    <Carousel className="max-w-full">
      <CarouselContent>
        {data?.map((expandedChapter) => (
          <CarouselItem key={expandedChapter.title} className="basis-1/4">
            <div className="flex flex-col gap-2 w-fit">
              <Image
                src={expandedChapter?.thumbnail as string}
                width={150}
                height={85}
                alt="chapter_image"
              />
              <span className="bg-sky-900 text-white px-1.5 py-0.5 text-sm w-fit line-clamp-1">
                {expandedChapter?.time}
              </span>
              <span className="text-sm font-semibold line-clamp-1">
                {expandedChapter?.title}
              </span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
}

export default VideoChapterCarousel;
