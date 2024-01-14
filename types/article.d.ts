interface ArticleListVO {
  _id: string;
  title: string;
  summary?: string;
  cover?: string;
  content: string;
  catalog: string;
  tags: string[];
  author: string;
  views: number;
  likes: number;
  comments: number;
  publish_date: number;
  created_at: number;
  updated_at: number;
}

interface ArticleDetailVO extends ArticleListVO {
  content: string;
}
