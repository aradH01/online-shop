import OfferSlider from "@/components/pages/home/components/OfferSlider/OfferSlider";
import {Typography} from "@/components/atoms/Typography";

export default function OfferSection(){
    return(
        <div className="mt-16">
            <Typography.Title level="h4" weight="semiBold" size="md" color="primary"
                              className="inline border-b-2 border-red-500 pb-2 border-solid">پرفروش های ما</Typography.Title>
            <OfferSlider/>
        </div>
    )
}
