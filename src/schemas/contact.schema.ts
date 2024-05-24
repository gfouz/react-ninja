import { z } from 'zod';

export const contactSchema = z.object({
	email: z.string().email({
		message: 'Valid email address is required',
	}),
	message: z.string().min(10, 'More than 10 letters'),
});

export type ContactInterface = z.infer<typeof contactSchema>;
