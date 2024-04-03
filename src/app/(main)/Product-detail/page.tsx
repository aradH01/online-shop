import dynamic from "next/dynamic";
const ProductDetail = dynamic(() => import('@/components/pages/productDetail/productDetail'));

export default function ProductsDetail() {
    return (
        <div className="">
            <ProductDetail/>
        </div>
    );
}
