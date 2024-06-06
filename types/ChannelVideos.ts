export type ChannelVideos = {
  headerList?: HeaderList[];
  videoResults?: VideoResult[];
  continuation?: string;
};

export type HeaderList = {
  name?: string;
  continuation?: string;
};

export type VideoResult = {
  videoId?: string;
  title?: string;
  description?: string;
  thumbnail?: string;
  publishedDate?: string;
  viewCount?: string;
  durationText?: string;
};
