import {z} from 'zod';

export const editPersonalInfoValidationSchema = z.object({
    first_name: z.string({invalid_type_error: '', required_error: ''}),
    last_name: z.string({invalid_type_error: '', required_error: ''}),
    user_name: z.string({invalid_type_error: '', required_error: ''}),
    email: z.string({invalid_type_error: '', required_error: ''}).email(),
    phone: z.string({invalid_type_error: '', required_error: ''}),
});
export type EditPersonalInfoValidationSchema = z.infer<typeof editPersonalInfoValidationSchema>;
