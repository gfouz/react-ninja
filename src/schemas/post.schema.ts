import { z } from 'zod';
import { InputGeneric } from './types';

export const PostUpdateSchema = z.object({
  title: z.string().min(4, '*Title is required'),
  content: z.string().min(10, '*Markdown content is required'),
});

export const PostCreateSchema = PostUpdateSchema.extend({
  author_id: z.string(),
  title: z.string().min(4, '*Title is required'),
  categories: z.string().min(1, '*Select one at least'),
  content: z.string().min(10, '*Markdown content is required'),
});

export type PostCreate = z.infer<typeof PostCreateSchema>;
export type PostUpdate = z.infer<typeof PostUpdateSchema>;
export type Post = PostCreate | PostUpdate;

export type InputProps = InputGeneric<Post>;
