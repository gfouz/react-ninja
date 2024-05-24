import { z } from 'zod';

export const RegisterSchema = z
  .object({
    username: z.string().min(5, 'more than 5 characters required'),
    email: z
      .string({
        required_error: 'Email is required',
      })
      .min(6, 'Email is required')
      .email('invalid format!'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z
      .string()
      .min(6, 'Confirm Password must be at least 6 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type RegisterInput = z.infer<typeof RegisterSchema>;
