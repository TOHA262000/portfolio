import React from 'react';
import './item.scss'
const PortfolioItem = ({name,img}) => {
    return (
        <div className="item">
            <img src={img} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default PortfolioItem;