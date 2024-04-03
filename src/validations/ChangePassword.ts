import {z} from "zod";

export const changePasswordValidationSchema = z.object({
    old_password: z.string({
        required_error:"This field is required"
    })
        .min(6, "Your current password is at least 6 characters!"),
    new_password: z.string({
        required_error:"This field is required"
    })
        .min(6, "Password must be at least 6 characters"),
    confirm_password: z.string({
        required_error:"This field is required"
    })
        .min(6, "Password must be at least 6 characters"),
}).refine((obj) => obj.new_password === obj.confirm_password,{path: ["confirm_password"],message:"Passwords must match"});
export type ChangePasswordValidationSchema = z.infer<typeof changePasswordValidationSchema>;
