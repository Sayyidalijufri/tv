"use client";
import CategoryPills from "@/components/CategoryPills";
import GridVideoItem from "@/components/GridVideoItem";
import { useState } from "react";

export default function Home() {
  const categories = [
    "All",
    "JavaScript",
    "TypeScript",
    "Programming",
    "Coding",
    "Hacking",
    "Next.js",
    "React.js",
    "Vite.js",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="overflow-x-hidden px-8 pb-4">
      <div className="sticky top-0 bg-white z-10 pb-4">
        <CategoryPills
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        <GridVideoItem
          id="EzTxYQmU8OE"
          title="Web Developer Roadmap (2024) - Everything is Changing"
          channel={{
            id: "UCf6AGqO98eGk11nfazociVQ",
            name: "ByteGrad",
            profileUrl:
              "https://yt3.ggpht.com/0TGYwRSjCshcMBsT7Ir3s4dm_X8SZohmuK7lCgR2_Hwjqq8yELeLNxCpeXLH10-UwWeBnrIE=s68-c-k-c0x00ffffff-no-rj",
          }}
          views={214000}
          postedAt={new Date(2024, 3, 0)}
          duration={100}
          thumbnailUrl="https://i.ytimg.com/vi/EzTxYQmU8OE/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC5aVltN3R47xRZKm3EgyGeukT97g"
          videoUrl="https://rr4---sn-npoeenlk.googlevideo.com/videoplayback?expire=1715265709&ei=TYw8Zq3GKfuP88EPnfOauAw&ip=125.166.119.48&id=o-AAJApzJVvNvge_jV0u0FHXn4BA5GHtP8Mmb9k1q1Cfyj&itag=22&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&cnr=14&ratebypass=yes&dur=1501.843&lmt=1709639074064734&c=ANDROID&txp=5432434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIgGw8t8M0JD86i_0HUmwjcz-kngPJqW9WTbqbBTydGV_cCIQCCUDNzqmzBzbSaEGQ0ANnYQ_Z9FCP850u9DC1z-viY7A%3D%3D&cm2rm=sn-2uuxa3vh-wccs7l&req_id=7d75878fd72a3ee&redirect_counter=2&rm=sn-npoz77e&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=da&mip=2001:448a:5130:9d25:b0a8:c82:7761:ccef&mm=29&mn=sn-npoeenlk&ms=rdu&mt=1715243817&mv=m&mvi=4&pl=48&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AHWaYeowRQIhAIzOZGvlHEsJY_Gc5SCu2VyWDqSv3ntsEXTuYiy7iJfaAiBm__RKyJ6tUsg-UuxHXUqFBY0dzlVr7pqy67JPgmOEOw%3D%3D"
        />
      </div>
    </div>
  );
}
