import {z} from 'zod';

export const signUpValidationSchema = z.object({
    phone: z.string({invalid_type_error: '', required_error: ''}),
    password: z.string({invalid_type_error: '', required_error: ''}),
});
export type SignUpValidationSchema = z.infer<typeof signUpValidationSchema>;
