export type ChannelStore = {
  storeResults?: StoreResult[];
};

export type StoreResult = {
  title?: string;
  products?: Product[];
};

export type Product = {
  productTitle?: string;
  productThumbnail?: string;
  productPrice?: string;
  productMerchantName?: string;
};
