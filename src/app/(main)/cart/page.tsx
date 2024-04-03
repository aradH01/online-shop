import dynamic from "next/dynamic";
const Cart = dynamic(() => import('@/components/pages/cart/Cart'));

export default function CartPage() {
    return (
        <div className="">
            <Cart/>
        </div>
    );
}
