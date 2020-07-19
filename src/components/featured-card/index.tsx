import React from 'react';
import { namespaces, withTranslation } from '@Server/i18n';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Button } from '../basic/button'
import { IFeaturedCard } from './featured-card';

import './styles.scss';
import { FavoriteBar } from '@Components/favorite-bar';

export const FeaturedCard: React.FunctionComponent<IFeaturedCard.IProps> = ({ item, className, onClick, t }) => {
    className = className ? className : "";

    return (
        <div className={"featured-card " + className} onClick={onClick}>
            <div className="featured-card-caption"> {item.caption} </div>
            <div className="featured-card-description"> {item.description} </div>

            <img className="featured-card-image" src={'images/' + item.picture} />

            <div className="featured-card-favorite">
                <img className="featured-card-favorite-icon" src='images/love.png' />
                <div className="featured-card-favorite-bar-container">
                    <FavoriteBar favorite={parseInt(item.favorite)} />
                </div>
                <div className="featured-card-favorite-value">
                    {item.favorite}%
                </div>
            </div>

            <div className="featured-card-price">
                {item.price} <span className="featured-card-price-comment">inc VAT</span>
            </div>

            <div className="featured-card-actions">
                {item.actions.map(action => {
                    return (
                        <div className="featured-card-actions-item" key={action}>
                            <Button bgColor="BLACK_27" inverted curved columns="0,50">
                                <span>{t(action)}</span>
                                <FontAwesomeIcon icon="arrow-right" />
                            </Button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default withTranslation(namespaces.COMMON)(FeaturedCard);