export type ChannelShorts = {
  headerList?: HeaderList[];
  shortResults?: ShortResult[];
};
export type HeaderList = {
  name?: string;
  continuation?: string;
};
export type ShortResult = {
  videoId?: string;
  title?: string;
  thumbnail?: string;
  viewCount?: string;
};
