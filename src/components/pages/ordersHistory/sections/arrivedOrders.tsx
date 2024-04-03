import { OrderHistoryType} from "@/types/pages";
import OrdersCard from "@/components/pages/ordersHistory/components/OrdersCard";


export default function ArrivedOrders(props:{data:OrderHistoryType[]}){
    const {step,order_at,order_code,price,image,id} = props.data?.flatMap(item => item.list)[1] ?? {}

    return(
        <div className="flex flex-col gap-6">
            <OrdersCard step={step} order_at={order_at} order_code={order_code} image={image} id={id} price={price}/>
            <OrdersCard step={step} order_at={order_at} order_code={order_code} image={image} id={id} price={price}/>
        </div>
    )
}
