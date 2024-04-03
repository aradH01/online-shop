import dynamic from "next/dynamic";
const Dashboard = dynamic(() => import('@/components/pages/dashboard/Dashboard'));

export default function DashboardPage() {
    return (
        <div className="">
            <Dashboard/>
        </div>
    );
}
