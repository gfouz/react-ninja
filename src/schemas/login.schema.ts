import { z } from 'zod';

export const LoginSchema = z.object({
  username: z.string().min(4, 'Username requires more than 4 characters'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(1, 'Password is required'),
});

export type LoginInferData = z.infer<typeof LoginSchema>;
