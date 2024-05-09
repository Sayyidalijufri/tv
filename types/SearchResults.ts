export type SearchResults = {
  searchResults?: SearchResult[];
  continuation?: string;
};

export type SearchResult = {
  channel?: Channel;
  shelf?: Shelf;
  video?: Video;
  playist?: Playist;
};

export type Channel = {
  channelId?: string;
  channelUsername?: string;
  title?: string;
  channelAvatar?: string;
  channelDescription?: Description[];
  subscriberCount?: string;
};

export type Description = {
  text?: string;
  bold?: boolean;
};

export type Playist = {
  playistId?: string;
  title?: string;
  videoCount?: string;
  playistThumbnail?: string;
  channelUsername?: string;
  channelId?: string;
  ownerText?: string;
  playistVideo?: {
    title?: string;
    videoId?: string;
    length?: string;
  }[];
};

export type Shelf = {
  title?: string;
  content?: Content[];
};

export type Content = {
  video?: Video;
};

export type Video = {
  videoId?: string;
  videoThumbnail?: string;
  title?: string;
  publishedTimeText?: string;
  durationTimeText?: string;
  viewCount?: string;
  ownerText?: string;
  channelId?: string;
  channelUsername?: string;
  channelAvatar?: string;
  chapters?: VideoChapters;
  badges?: string[];
  videoDescription?: Description[];
};

export type VideoChapters = {
  title?: string;
  thumbnail?: string;
  numberChapters?: string;
  numberExpandedChapters?: string;
  expandedContent?: ExpandedChaptersContent[];
};

export type ExpandedChaptersContent = {
  title?: string;
  time?: string;
  thumbnail?: string;
};
