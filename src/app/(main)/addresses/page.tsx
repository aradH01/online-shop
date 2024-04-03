import dynamic from "next/dynamic";
const Addresses = dynamic(() => import('@/components/pages/addresses/Addresses'));

export default function AddressesPage() {
    return (
        <div className="">
            <Addresses/>
        </div>
    );
}
