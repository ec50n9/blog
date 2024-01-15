import { BaseDO } from "@/common_types";

export interface ArticleProp {
  title: string;
  summary?: string;
  cover?: string;
  content?: string;
  catalog_id?: string;
  tags: string[];
  publish_time?: number;
  views: number;
}

export type ArticleDO = ArticleProp & BaseDO;

export type ArticleCreateVO = Pick<
  ArticleProp,
  "title" | "summary" | "cover" | "content" | "catalog_id" | "tags"
>;

export type ArticleInsertDTO = ArticleProp;
