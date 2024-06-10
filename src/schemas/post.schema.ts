import { z } from 'zod';

export const CreatePostSchema = z.object({
  author_id: z.string(),
  title: z.string().min(4, '*Title is required'),
  categories: z.string().min(1, '*Select one at least'),
  content: z.string().min(10, '*Markdown content is required'),
});

export const UpdatePostSchema = z.object({
  title: z.string().min(4, '*Title is required'),

  content: z.string().min(10, '*Markdown content is required'),
});

export type CreatePostInferface = z.infer<typeof CreatePostSchema>;
export type UpdatePostInferface = z.infer<typeof UpdatePostSchema>;
