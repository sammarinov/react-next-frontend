import { WithTranslation } from 'next-i18next';
import { IArticle, IArticlesData } from '@Redux/app/type';

declare namespace IArticleBoardProps {
    export interface IProps extends WithTranslation {
        name: string;
        caption: string,
        data: IArticle[]
    }

    export interface InitialProps {
        namespacesRequired: string[];
    }

    export interface IStateProps {
        home: {
            version: number;
        };
        image: {
            url: string;
        };
    }

    namespace Actions {
        export interface IMapPayload { }

        export interface IMapResponse { }

        export interface IGetApodPayload extends PlanetaryModel.GetApodPayload {
            params: {};
        }

        export interface IGetApodResponse extends PlanetaryModel.GetApodResponse { }
    }
}

export { IArticleBoardProps };
