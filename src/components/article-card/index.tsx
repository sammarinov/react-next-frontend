import React from 'react';

import { IArticleCard } from './article-card';

import './styles.scss';

export const ArticleCard: React.FunctionComponent<IArticleCard.IProps> = ({ item, className, onClick }) => {
    const dateElem = new Date(item.created).toDateString().split(' ');
    const createdDate = dateElem[1] + ' ' + dateElem[2] + ', ' + dateElem[3];
    className = className ? className : "";

    return (
        <div className={className + " article-card"} onClick={onClick}>
            <img src={'images/' + item.picture} className="article-card-image" />
            <div className="article-card-caption">
                {item.caption}
            </div>
            <div className="article-card-info">
                {createdDate} by {item.author}
            </div>
            <div className="article-card-description">
                {item.description}
            </div>
        </div>
    );
};

export default ArticleCard;