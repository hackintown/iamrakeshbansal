export interface BlogPost {
  _id: string;
  title: string;
  content: string;
  image: string;
  tags: string[];
  createdAt: string;
  subtitle?: string;
  author?: {
    name: string;
    avatar: string;
  };
  readingTime?: string;
}

