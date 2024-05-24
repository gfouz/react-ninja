import { z } from 'zod';

export const CreatePostSchema = z.object({
  author_id: z.string(),
  title: z.string().min(4, 'title is required'),
  categories: z.array(z.string()),
  content: z.string().min(10, 'content is required'),
});

export const UpdatePostSchema = z.object({
  title: z.string().min(5, 'title is required'),
  content: z.string().min(10, 'content is required'),
});

export type CreatePostInterface = z.infer<typeof CreatePostSchema>;
export type UpdatePostInterface = z.infer<typeof UpdatePostSchema>;
