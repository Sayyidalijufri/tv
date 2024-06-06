export type ChannelCommunities = {
  communitiyResults?: CommunitiyResult[];
  continuation?: string;
};

export type CommunitiyResult = {
  postId?: string;
  author?: Author;
  description?: string;
  numberLikes?: string;
  numberComments?: string;
  publishedTime?: string;
  attachment?: string[] | AttachmentVideo | string;
};

export type AttachmentVideo = {
  videoId?: string;
  thumbnail?: string;
  title?: string;
  description?: string;
  ownerText?: String;
  isVerified?: boolean;
  publishedTime?: string;
  durationText?: string;
  viewCount?: string;
};

export type Author = {
  name?: String;
  avatar?: string;
  channelId?: string;
};
