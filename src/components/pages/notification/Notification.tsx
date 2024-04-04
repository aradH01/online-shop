'use client'
import SubHeader from "@/components/organisms/subHeader/subHeader";
import NotificationCard from "@/components/pages/notification/components/notificationCard";

export default function Notification() {
    return (
        <div>
            <SubHeader className="sticky top-0"/>
            <div className="w-[84rem] mb-[64px] mt-[100px] mx-auto max-w-[95%]">
                <div
                    className="bg-[#E2E2E4] mt-8 gap-8 justify-between items-center min-h-[180px] py-6 flex flex-col shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-3xl px-6 ">
                    <NotificationCard title="کد تخفیف جدید برای شما" date="1403-12-14"/>
                    <NotificationCard title="کد تخفیف جدید برای شما" date="1403-12-14"/>
                    <NotificationCard title="کد تخفیف جدید برای شما" date="1403-12-14"/>
                </div>
            </div>
        </div>
    )
}
