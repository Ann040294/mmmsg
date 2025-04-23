import { z } from 'zod';

export const registerSchema = z
    .object({
        name: z
            .string()
            .min(2, 'register.required')
            .max(50, 'register.invalidName'),
        email: z.string().email('register.invalidEmail'),
        password: z
            .string()
            .min(8, 'register.invalidPassword')
            .regex(/[A-Z]/, 'register.invalidPassword')
            .regex(/[0-9]/, 'register.invalidPassword')
            .regex(/[^A-Za-z0-9]/, 'register.invalidPassword'),
        confirmPassword: z.string(),
        agree: z.boolean().refine((v) => v, 'register.required'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'register.passwordsMismatch',
        path: ['confirmPassword'],
    });

export type RegisterFormValues = z.infer<typeof registerSchema>;
