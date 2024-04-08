import { z } from 'zod';

export const addPostSchema = z.object({
  title: z.string().min(5, 'title is required'),
  content: z.string().min(10, 'content is required'),
});

export type addPostType = z.infer<typeof addPostSchema>;
