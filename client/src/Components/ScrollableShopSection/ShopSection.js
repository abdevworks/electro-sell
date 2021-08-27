import React, {useState} from 'react';
import ProductDataProvider from "../DataProvider/ProductDataProvider";
import ScrollableList from "./ScrollableList";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";

export default function ShopSection(props){

    const [isHovered, setIsHovered] = useState(false);

    function handleHover(){
        setIsHovered(!isHovered);
    }

    const {sectionName, apiURL, componentCardSize = "small", sectionLink = true, displayAsRows} = props;
    const itemList = <ProductDataProvider url={apiURL} component={ScrollableList} componentCard={props.componentCard} componentCardSize={componentCardSize} displayAsRows={displayAsRows}/>;

    return(
        <div className="mb-4 pt-4 pb-8 bg-white px-5 lg:pt-0 lg:pb-0 lg:mb-0">
            <div className=" flex items-center justify-between lg:pt-3 lg:border-gray-300 lg:border-t">
                <h1 className=" font-semibold text-2xl pb-2 ">
                    {sectionName}
                </h1>
                <Link to="/product-category" className={`
                select-none cursor-pointer rounded-full py-1 px-4 text-sm flex items-center
                ${sectionLink ? "" : "hidden"} 
                ${isHovered ? "bg-gray-100" : ""}`} 
                onMouseOver={handleHover} onMouseOut={handleHover}
                >
                <p className="pr-2">Show everything</p>
                <FontAwesomeIcon icon={faChevronRight}/>
                </Link>
            </div>

            {itemList}
        </div>
    );
}