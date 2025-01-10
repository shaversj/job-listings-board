export interface JobCategoryFilter {
  role: string[] | null;
  level: string[] | null;
  languages: string[] | null;
  tools: string[] | null;
}

export interface Job {
  logo: string;
  company: string;
  new: boolean;
  featured: boolean;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  role: string;
  level: string;
  languages: string[];
  tools: string[];
}
