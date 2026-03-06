export type MenuItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};