"use client";
import {
  ChevronDown,
  ChevronUp,
  Clapperboard,
  Clock,
  Film,
  Flame,
  Gamepad2,
  History,
  Home,
  Library,
  Lightbulb,
  ListVideo,
  Music2,
  Newspaper,
  PlaySquare,
  Podcast,
  Radio,
  Repeat,
  Shirt,
  ShoppingBag,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import React, {
  Children,
  ElementType,
  ReactNode,
  useEffect,
  useState,
} from "react";
import Button, { buttonStyles } from "./Button";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { useSidebar } from "@/hooks/useSidebar";
import { PageHeaderFirstSection } from "./PageHeader";

type Props = {};

function Sidebar({}: Props) {
  const { isLargeOpen, isSmallOpen, close } = useSidebar();
  const subscribtions = [
    {
      channelName: "Muhammad Jufry",
      id: "muhammadjufry",
      imgUrl:
        "https://yt3.googleusercontent.com/ytc/AIdro_nO3F7DfVXaf6wsHPS_hF327ggeWUCwZSELb5DCWBL1aw=s88-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      channelName: "Sonny Sangha",
      id: "sonny sangha",
      imgUrl:
        "https://yt3.ggpht.com/wDwyoG0x4N9D0ihYzRNxCNrJPgoO6cAU8IkBU2CNhrj6aKXxCPzy_gqS_1gOrRxwhgofEQTxT4s=s88-c-k-c0x00ffffff-no-rj-mo",
    },
  ];
  const playists = [
    {
      id: "1",
      name: "Frontend & Backend",
    },
    {
      id: "1",
      name: "Favorites",
    },
    {
      id: "1",
      name: "React",
    },
    {
      id: "1",
      name: "Next.js",
    },
    {
      id: "1",
      name: "TypeScript",
    },
  ];
  return (
    <>
      <aside
        className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 hidden md:flex flex-col items-center ml-1 ${
          isLargeOpen ? "lg:hidden" : "lg:flex"
        }`}
      >
        <SmallSidebarItem Icon={Home} title="Home" url="/" />
        <SmallSidebarItem Icon={Repeat} title="Shorts" url="/shorts" />
        <SmallSidebarItem
          Icon={Clapperboard}
          title="Subscribtions"
          url="/subscribtions"
        />
        <SmallSidebarItem Icon={Library} title="Library" url="/library" />
      </aside>
      {isSmallOpen && (
        <div
          onClick={close}
          className="lg:hidden fixed inset-0 z-[999] bg-secondary-dark opacity-50"
        />
      )}
      <aside
        className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 ${
          isLargeOpen ? "lg:flex" : "lg:hidden"
        } ${isSmallOpen ? "flex z-[999] bg-white max-h-screen" : "hidden"}`}
      >
        <div className="lg:hidden pt-2 pb-4 px-2 sticky top-0 bg-white">
          <PageHeaderFirstSection />
        </div>
        <LargeSidebarSection>
          <LargeSidebarItem isActive IconOrImg={Home} title="Home" url="/" />
          <LargeSidebarItem
            IconOrImg={Clapperboard}
            title="Subscribtions"
            url="/subscribtions"
          />
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection visibleItemCount={5}>
          <LargeSidebarItem
            IconOrImg={Library}
            title="Library"
            url="/library"
          />
          <LargeSidebarItem
            IconOrImg={History}
            title="History"
            url="/history"
          />
          <LargeSidebarItem
            IconOrImg={PlaySquare}
            title="Your Videos"
            url="/videos"
          />
          <LargeSidebarItem
            IconOrImg={Clock}
            title="Watch Later"
            url="/watch-later"
          />
          {playists.map((playist) => (
            <LargeSidebarItem
              key={playist.id}
              title={playist.name}
              url={`/playist?list=${playist.id}`}
              IconOrImg={ListVideo}
            />
          ))}
        </LargeSidebarSection>
        {/* <hr /> 
        <LargeSidebarSection title="Subscribtions" visibleItemCount={5}>
          {subscribtions.map((subscribtion) => (
            <LargeSidebarItem
              key={subscribtion.id}
              IconOrImg={subscribtion.imgUrl}
              title={subscribtion.channelName}
              url={`/@${subscribtion.id}`}
            />
          ))}
        </LargeSidebarSection> */}
        <hr />

        <LargeSidebarSection title="Explore">
          <LargeSidebarItem
            IconOrImg={Flame}
            title="Trending"
            url="/trending"
          />
          <LargeSidebarItem
            IconOrImg={ShoppingBag}
            title="Shopping"
            url="/shopping"
          />
          <LargeSidebarItem IconOrImg={Music2} title="Music" url="/music" />
          <LargeSidebarItem
            IconOrImg={Film}
            title="Movies & TV"
            url="/movies-tv"
          />
          <LargeSidebarItem IconOrImg={Radio} title="Live" url="/live" />
          <LargeSidebarItem IconOrImg={Gamepad2} title="Gaming" url="/gaming" />
          <LargeSidebarItem IconOrImg={Newspaper} title="News" url="/news" />
          <LargeSidebarItem IconOrImg={Trophy} title="Sports" url="/sports" />
          <LargeSidebarItem
            IconOrImg={Lightbulb}
            title="Learning"
            url="/learning"
          />
          <LargeSidebarItem
            IconOrImg={Shirt}
            title="Fashion & Beauty"
            url="/fashion-beauty"
          />
          <LargeSidebarItem
            IconOrImg={Podcast}
            title="Podcasts"
            url="/podcasts"
          />
        </LargeSidebarSection>
      </aside>
    </>
  );
}

type SmallSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

function SmallSidebarItem({ Icon, title, url }: SmallSidebarItemProps) {
  return (
    <Link
      href={url}
      className={twMerge(
        buttonStyles({ variant: "secondVariant" }),
        "py-4 px-1 flex flex-col items-center rounded-lg gap-1 w-full"
      )}
    >
      <Icon className="size-6" />
      <div className="text-sm">{title}</div>
    </Link>
  );
}

type LargeSidebarSectionProps = {
  children: ReactNode;
  title?: string;
  visibleItemCount?: number;
};

function LargeSidebarSection({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}: LargeSidebarSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = Children.toArray(children).flat();
  const showExpandedButton = childrenArray.length > visibleItemCount;
  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, visibleItemCount);
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;
  return (
    <div>
      {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
      {visibleChildren}
      {showExpandedButton && (
        <Button
          variant="secondVariant"
          className="w-full flex items-center rounded-lg gap-4 p-3"
          onClick={() => setIsExpanded((e) => !e)}
        >
          <ButtonIcon className="size-6" />
          <div className="">{isExpanded ? "Show Less" : "Show More"}</div>
        </Button>
      )}
    </div>
  );
}

type LargeSidebarItemProps = {
  isActive?: boolean;
  IconOrImg: ElementType | string;
  title: string;
  url: string;
};

function LargeSidebarItem({
  isActive = false,
  IconOrImg,
  title,
  url,
}: LargeSidebarItemProps) {
  return (
    <Link
      href={url}
      className={twMerge(
        buttonStyles({ variant: "secondVariant" }),
        `w-full flex items-center rounded-lg gap-4 p-3 ${
          isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined
        }`
      )}
    >
      {typeof IconOrImg === "string" ? (
        <Image
          src={IconOrImg}
          width={24}
          height={24}
          className="size-6 rounded-full"
          alt="subscribtion_channel_img"
        />
      ) : (
        <IconOrImg className="size-6" />
      )}
      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>
    </Link>
  );
}

export default Sidebar;
