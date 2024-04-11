import dynamic from "next/dynamic";
const CareProducts = dynamic(() => import('@/components/pages/CareProducts/CareProducts'));

export default function CareProductsPage() {
    return (
        <div className="w-[84rem] max-w-[95%] mx-auto my-12">
            <CareProducts/>
        </div>
    );
}
