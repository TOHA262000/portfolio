import React, { useEffect, useState } from 'react';
import PortfolioList from '../PortfolioList/PortfolioList';
import './portfolio.scss';
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio
} from '../../data';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
const Protfoio = () => {
    const [select,setSelect]=useState('featured');
    const [ data,setData]=useState([]);
    useEffect(()=>{
        switch(select){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    },[select])
    const options = [
        {
            name: 'Featured',
            id: 'featured',
        },
        {
            name: 'Web App',
            id: 'web',
        },
        {
            name: 'Mobile App',
            id: 'mobile',
        },
        {
            name: 'Design',
            id: 'design',
        },
        
        {
            name: 'Content',
            id: 'content',
        }
    ]
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {
                    options.map((option)=>(
                        <PortfolioList
                            key={option.id}
                            name={option.name}
                            active={select===option.id}
                            setSelect={setSelect}
                            id={option.id}
                        ></PortfolioList>
                    ))
                }
            </ul>
            <div className="container">
                
                {data.map((item)=>(
                    <PortfolioItem
                        key={item.id}
                        name={item.title}
                        img={item.img}
                    ></PortfolioItem>
                ))}
            </div>
        </div>
    );
};

export default Protfoio;