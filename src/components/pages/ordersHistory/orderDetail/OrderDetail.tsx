import {Typography} from "@/components/atoms/Typography";
import Link from "next/link";
import {Icon} from "@/components/atoms/Icon";
import {useSearchParams} from "next/navigation";
import Image from "next/image";
import Picture1 from "@/images/pic1.jpg"
import Picture2 from "@/images/pic4.jpg"
export default function OrderDetail() {
    const params = useSearchParams().get("id")
    return (
        <div className="w-[84rem] mb-[64px] mt-[100px] mx-auto max-w-[95%]">
            <div className="flex items-center gap-4 mb-6">
                <Link href="/">
                    <Icon name="UpArrow" className="rotate-90"/>
                </Link>
                <Typography.Title level="h1" weight="bold" size="lg" className="!text-right">جزئیات
                    سفارش</Typography.Title>
            </div>
            <div className="border shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-3 px-8 rounded-3xl bg-glass-bg">
                <div className="flex border-b border-solid border-[#B9B9B9] py-4 items-center gap-8">
                    <div className="flex items-center gap-3">
                        <Typography.Text size="sm" weight="normal" color="grayMedium"> کد سفارش </Typography.Text>
                        <Typography.Text size="sm" weight="semiBold" color="primary">232344</Typography.Text>
                    </div>
                    <div className="flex items-center gap-3">
                        <Typography.Text size="sm" weight="normal" color="grayMedium"> تاریخ ثبت
                            سفارش </Typography.Text>
                        <Typography.Text size="sm" weight="semiBold" color="primary">1403-05-03</Typography.Text>
                    </div>
                </div>
                <div className="border-b flex flex-col gap-4 border-solid border-[#B9B9B9] py-4">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-3">
                            <Typography.Text size="sm" weight="normal" color="grayMedium"> تحویل
                                گیرنده</Typography.Text>
                            <Typography.Text size="sm" weight="semiBold" color="primary">haghighy</Typography.Text>
                        </div>
                        <div className="flex items-center gap-3">
                            <Typography.Text size="sm" weight="normal" color="grayMedium"> شماره موبایل
                            </Typography.Text>
                            <Typography.Text size="sm" weight="semiBold" color="primary">09143256514</Typography.Text>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Typography.Text size="sm" weight="normal" color="grayMedium"> آدرس
                        </Typography.Text>
                        <Typography.Text size="sm" weight="semiBold" color="primary">یالدور، خیابان شریعتی شرقی، بن بست ارشاد</Typography.Text>
                    </div>
                </div>
                <div className="border-b flex flex-col gap-4 border-solid border-[#B9B9B9] py-4">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-3">
                            <Typography.Text size="sm" weight="normal" color="grayMedium">
                                مبلغ</Typography.Text>
                            <Typography.Text size="sm" weight="semiBold" color="primary">2142000</Typography.Text>
                        </div>
                        <div className="flex items-center gap-3">
                            <Typography.Text size="sm" weight="normal" color="grayMedium"> هزینه ارسال
                            </Typography.Text>
                            <Typography.Text size="sm" weight="semiBold" color="primary">45000</Typography.Text>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col py-4 gap-4">
                    <div className="flex items-start gap-2">
                        <div className="w-[200px] max-w-[205px] h-[140px] max-h-[150px] relative">
                            <Image
                                src={Picture1}
                                alt="ProfileImage"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Typography.Paragraph size="md" weight="medium" color="primary" className="!text-center">فوم شستشو نوتروژینا</Typography.Paragraph>
                            <ul className="!text-right flex-col flex gap-2">
                                <li className="flex items-start gap-2">
                                    <Icon name="Brand" className="w-6 h-6"/>
                                    <Typography.Paragraph weight="medium" color="primary" className="!text-[12px] !text-right">نوتروژینا</Typography.Paragraph>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Icon name="Shield" className="w-6 h-6"/>
                                    <Typography.Paragraph weight="medium" color="primary" className="!text-[12px] !text-right">تضمین اصالت کالا</Typography.Paragraph>
                                </li>
                            </ul>
                        </div>
                    </div> <div className="flex items-start gap-2">
                        <div className="w-[200px] max-w-[205px] h-[140px] max-h-[150px] relative">
                            <Image
                                src={Picture1}
                                alt="ProfileImage"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Typography.Paragraph size="md" weight="medium" color="primary" className="!text-center">فوم شستشو نوتروژینا</Typography.Paragraph>
                            <ul className="!text-right flex-col flex gap-2">
                                <li className="flex items-start gap-2">
                                    <Icon name="Brand" className="w-6 h-6"/>
                                    <Typography.Paragraph weight="medium" color="primary" className="!text-[12px] !text-right">نوتروژینا</Typography.Paragraph>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Icon name="Shield" className="w-6 h-6"/>
                                    <Typography.Paragraph weight="medium" color="primary" className="!text-[12px] !text-right">تضمین اصالت کالا</Typography.Paragraph>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
