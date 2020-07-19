import { IArticle } from "@Redux/app/type";

declare namespace IArticleCard {
    export interface IProps {
        className?: string;
        onClick?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
        item: IArticle;
    }
}

export { IArticleCard };
