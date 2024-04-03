import dynamic from "next/dynamic";
import {Metadata} from "next";

const OtpCode = dynamic(() => import('@/components/pages/code-verification/otpConfirmation'));

export const metadata: Metadata = {
    title: '',
    description: '',
};
export default function PhoneConfirmation() {
    return (
        <div>
            <OtpCode/>
        </div>
    )
}
