export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type StatItem = {
  value: number;
  suffix?: string;
  label: string;
  description?: string;
};

export type BoardMember = {
  id: string;
  name: string;
  title: string;
  image?: string;
  bio?: string;
  isFounder?: boolean;
};

export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: "haber" | "duyuru" | "faaliyet";
  image?: string;
  featured?: boolean;
};

export type AffiliateAssociation = {
  id: string;
  name: string;
  city: string;
  logo?: string;
};
