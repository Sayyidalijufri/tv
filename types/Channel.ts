export type Channel = {
  headerResults?: HeaderResults;
  bodyResults?: BodyResults;
};

export type BodyResults = {
  pinnedVideo?: PinnedVideo;
  joinedMembers?: JoinedMembers;
  listSections?: ListSection[];
  featuredChannels?: FeaturedChannels;
  tabLists?: TabList[];
};

export type JoinedMembers = {
  title?: string;
  subTitle?: string;
  membersAvatar?: string[];
};

export type ListSection = {
  title?: string;
  isShelfVideo?: boolean;
  isFeaturedChannels?: boolean;
  isReel?: boolean;
  videoLists?: VideoList[];
};

export type FeaturedChannels = {
  title?: string;
  featuredChannelLists?: FeaturedChannelList[];
};

export type VideoList = {
  videoId?: string;
  title?: string;
  thumbnail?: string;
  publishedDate?: string;
  viewCount?: string;
  durationText?: string;
  isVerified?: boolean;
};

export type FeaturedChannelList = {
  channelId?: string;
  channelName?: string;
  channelSubscriberCount?: string;
  channelVideoCount?: string;
  channelAvatar?: string;
};

export type PinnedVideo = {
  videoId?: string;
  title?: string;
  description?: string;
  viewCount?: string;
  publishedTime?: string;
  readMore?: string;
};

export type TabList = {
  title?: string;
  link?: string;
};

export type HeaderResults = {
  channelId?: string;
  channelName?: string;
  channelAvatar?: string;
  channelBanner?: string;
  channelLinks?: ChannelLinks;
  channelSubscriberCount?: string;
  channelVideosCount?: string;
  channelUsername?: string;
  channelDescription?: string;
};

export type ChannelLinks = {
  firstLink?: string;
  more?: string;
};
