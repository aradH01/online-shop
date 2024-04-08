
import ArticleSlider from "@/components/pages/home/components/ArticleSlider/ArticleSlider";
import {Typography} from "@/components/atoms/Typography";

export default function Articles(){
    return(
        <div>
            <Typography.Title level="h4" weight="semiBold" size="md" color="primary"
                              className="inline border-b-2 border-red-500 pb-2 border-solid mb-10"> مقالات</Typography.Title>
                <ArticleSlider/>
        </div>
    )
}
