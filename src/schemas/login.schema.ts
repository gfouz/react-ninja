import { z } from 'zod';

export const LoginSchema = z.object({
  username: z.string().min(5, 'username requires more than 5 characters'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(1, 'Password is required'),
});

export type LoginInput = z.infer<typeof LoginSchema>;
