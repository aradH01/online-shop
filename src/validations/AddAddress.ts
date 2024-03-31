import {z} from 'zod';

export const addAddressValidationSchema = z.object({
    full_address: z.string({invalid_type_error: '', required_error: ''}),
    province: z.string({invalid_type_error: '', required_error: ''}),
    city: z.string({invalid_type_error: '', required_error: ''}),
    alley: z.string({invalid_type_error: '', required_error: ''}),
    number: z.string({invalid_type_error: '', required_error: ''}),
    vahed: z.string({invalid_type_error: '', required_error: ''}),
    zip_code: z.string({invalid_type_error: '', required_error: ''}),
    first_name: z.string({invalid_type_error: '', required_error: ''}),
    last_name: z.string({invalid_type_error: '', required_error: ''}),
    phone: z.string({invalid_type_error: '', required_error: ''}),
});
export type AddAddressValidationSchema = z.infer<typeof addAddressValidationSchema>;
