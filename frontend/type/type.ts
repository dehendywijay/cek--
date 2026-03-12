export type MenuItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export type News = {
  id: number;
  title: string;
  thumbnail: string;
  imgUrl: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};