export type FeaturedItem = {
  Id: string;
  Title: string;
  CoverImage: string;
  TitleImage: string;
  Date: string;
  ReleaseYear: string;
  MpaRating: string;
  Category: string;
  Duration: string;
  Description: string;
};

export type TrendingItem = FeaturedItem & {
  VideoUrl: string;
};

export type ResponseData = {
  Featured: FeaturedItem;
  TendingNow: TrendingItem[];
};

export type MenuItems = {
  label: string;
  path: string;
  icon: string;
};
