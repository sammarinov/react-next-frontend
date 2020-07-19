import { TFunction, WithTranslation } from "next-i18next";
import { ISocialData } from "@Redux/app/type";
import { WithTranslation } from "next-i18next";

declare namespace IFooter {
    export interface IProps extends WithTranslation {
        social: ISocialData
    }
}

export { IFooter };
