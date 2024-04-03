import dynamic from "next/dynamic";
const OrdersList = dynamic(() => import('@/components/pages/ordersHistory/ordersHistory'));

export default function OrdersListPage() {
    return (
        <div className="">
            <OrdersList/>
        </div>
    );
}
