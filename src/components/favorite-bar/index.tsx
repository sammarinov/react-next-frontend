import React from 'react';

import { IFavoriteBar } from './favorite-bar';

import './styles.scss';

export const FavoriteBar: React.FunctionComponent<IFavoriteBar.IProps> = props => {
    const { favorite } = props;

    return (
        <div className={props.className + ' favorite-bar-container'}>
            <div className='favorite-bar'
                style={{
                    width: favorite + '%'
                }}>
            </div>
        </div>
    );
};
