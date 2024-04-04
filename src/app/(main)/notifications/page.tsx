import dynamic from "next/dynamic";
const Notification = dynamic(() => import('@/components/pages/notification/Notification'));

export default function NotificationPage() {
    return (
        <div>
            <Notification/>
        </div>
    );
}
