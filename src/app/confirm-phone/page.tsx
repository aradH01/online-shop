import dynamic from "next/dynamic";
import {Metadata} from "next";

const ConfirmationNumber = dynamic(() => import('@/components/pages/confirmPhone/confirmPhone'));

export const metadata: Metadata = {
    title: '',
    description: '',
};
export default function PhoneConfirmation() {
    return (
        <div>
            <ConfirmationNumber/>
        </div>
    )
}
