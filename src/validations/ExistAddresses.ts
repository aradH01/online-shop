import {z} from 'zod';

export const existAddressValidationSchema = z.object({
    address: z.string({invalid_type_error: 'Please select one', required_error: 'Please select one'}),
});
export type ExistAddressValidationSchema = z.infer<typeof existAddressValidationSchema>;
