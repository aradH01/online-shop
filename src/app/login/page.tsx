import dynamic from "next/dynamic";
import {Metadata} from "next";

const Login = dynamic(() => import('@/components/pages/login/login'));

export const metadata: Metadata = {
    title: '',
    description: '',
};
export default function LoginPage() {
    return (
        <div>
            <Login/>
        </div>
    )
}
