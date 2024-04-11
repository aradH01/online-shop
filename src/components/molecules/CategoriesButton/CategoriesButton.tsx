import {Typography} from "@/components/atoms/Typography";
import {CatButtonsProps} from "@/types/components-types";
import {Button} from "@/components/molecules/Button/Buttom";
import React, {useEffect, useState} from "react";

export const CategoriesButton: React.FC<CatButtonsProps> = ({label, className, categories, onClick, ...props}) => {

    const [category, setCategory] = useState(categories);

    useEffect(() => {
        setCategory(categories)
    }, [categories]);


    function handleClick(index: number) {
        let updatedCategories = [...categories];
        updatedCategories[index].selected = !updatedCategories[index].selected;
        if (index === 0) {
            updatedCategories.forEach((item) => {
                item.selected = false
            })
            categories[0].selected = true
        } else {
            categories[0].selected = false
        }
        if (!updatedCategories.find((item) => item.selected)) {
            categories[0].selected = true
        }
        // Update the state with the new categories array
        setCategory(updatedCategories);
        onClick?.(updatedCategories.filter((item) => categories[0].selected || item.selected))
    }

    return (
        <div className={className}>
            <Typography.Text color="primary" weight="normal" size="sm"> {label}</Typography.Text>
            <div className="flex mt-4 gap-[20px] flex-wrap">
                {category.map((cat, index) => {
                    return <Button className="p-[1rem] !w-max" key={cat.label} title={cat.label}
                                   outlined={!cat.selected} onClick={() => {
                        handleClick(index)

                    }}
                                   {...props}
                    />
                })}
            </div>
        </div>
    )
}

