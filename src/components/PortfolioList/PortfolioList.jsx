import React from 'react';
import './portfolioList.scss'
const PortfolioList = ({name,id,active,setSelect}) => {
    return (
        <li onClick={()=>setSelect(id)} className={`portfolioList ${active?"active":""}`}>
            {name}
        </li>
    );
};

export default PortfolioList;