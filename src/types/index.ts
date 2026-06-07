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
  content: string;
  date: string;
  category: "haber" | "duyuru" | "faaliyet" | "basin";
  image?: string;
  featured?: boolean;
  /** Dış basın / video bağlantısı */
  externalUrl?: string;
  source?: string;
};

export type AffiliateAssociation = {
  id: string;
  name: string;
  city: string;
  logo?: string;
};

export type ProvincialRepresentative = {
  id: string;
  city: string;
  name: string;
  title: string;
  image: string;
};
