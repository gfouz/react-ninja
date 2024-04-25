import { z } from 'zod';

export const RegisterSchema = z.object({
  username: z.string().min(5, 'more than 5 characters required'),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .min(6, 'Email is required')
    .email('invalid format!'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, 'Password is required'),
});

export type RegisterInput = z.infer<typeof RegisterSchema>;
