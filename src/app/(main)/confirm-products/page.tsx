import dynamic from "next/dynamic";
const ConfirmProducts = dynamic(() => import('@/components/pages/confirmProducts/confirmProducts'));

export default function ConfirmProductsPage() {
    return (
        <div className="">
            <ConfirmProducts/>
        </div>
    );
}
