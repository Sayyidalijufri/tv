export type ChannelLives = {
  headerList?: HeaderList[];
  liveResults?: LiveResult[];
  continuation?: string;
};
export type HeaderList = {
  name?: string;
  continuation?: string;
};
export type LiveResult = {
  videoId?: string;
  title?: string;
  description?: string;
  thumbnail?: string;
  publishedDate?: string;
  viewCount?: string;
  durationText?: string;
};
