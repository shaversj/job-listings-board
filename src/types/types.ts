export interface JobCategoryFilter {
  role: string[];
  level: string[];
  languages: string[];
  tools: string[];
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
