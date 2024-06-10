import { z } from 'zod';

export const LoginSchema = z.object({
  username: z.string().min(6, 'Username requires more than 6 values'),
  password: z.string().min(6, 'Password must be at least 6 values'),
});

export type LoginInferData  = z.infer<typeof LoginSchema>;
