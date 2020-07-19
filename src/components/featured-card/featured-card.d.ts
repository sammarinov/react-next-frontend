import { IFeatured } from "@Redux/app/type";
import { TFunction, WithTranslation } from "next-i18next";

declare namespace IFeaturedCard {
    export interface IProps extends WithTranslation {
        className?: string;
        onClick?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
        item: IFeatured;
    }
}

export { IFeaturedCard };
