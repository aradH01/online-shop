import dynamic from "next/dynamic";
const BeautyProducts = dynamic(() => import('@/components/pages/beautyProducts/BeautyProducts'));

export default function BeautyProductsPage() {
    return (
        <div className="w-[84rem] max-w-[95%] mx-auto my-12">
            <BeautyProducts/>
        </div>
    );
}
