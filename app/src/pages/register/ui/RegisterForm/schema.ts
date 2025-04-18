import { z } from 'zod';

export const registerSchema = z
    .object({
        name: z
            .string()
            .min(2, 'register.name.placeholder')
            .max(50, 'register.name.placeholder'),
        email: z.string().email('register.email.placeholder'),
        password: z
            .string()
            .min(8, 'register.password.placeholder')
            .regex(/[A-Z]/, 'register.password.placeholder')
            .regex(/[0-9]/, 'register.password.placeholder')
            .regex(/[^A-Za-z0-9]/, 'register.password.placeholder'),
        confirmPassword: z.string(),
        agree: z.boolean().refine((v) => v, 'register.agreeTerms'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'register.confirmPassword.placeholder',
        path: ['confirmPassword'],
    });

export type RegisterFormValues = z.infer<typeof registerSchema>;
