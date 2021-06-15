import React, {useState} from "react";
import {faTimes, faHeadset} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {navigationMenuCategories} from "../NavigationMenuCategories/navigationMenuCategories";
import NavigationMenuCategory from '../../Views/NavigationMenuCategory';

export default function NavigationMenuSideCategories(props){

    const customersHelp = {
        id: 1,
        name: "Customer's Help",
        icon: <div className="text-xl"><FontAwesomeIcon icon={faHeadset}/></div>
    }

    const [isHovered, setIsHovered] = useState(false);

    function handleHover(){
        setIsHovered(!isHovered);
    }
    
    return(
        <nav>
            <div className="px-2 py-2 font-bold text-lg bg-gray-100 flex items-center">
                <div className={`
                w-10 h-10 flex items-center justify-center text-xl text-gray-600 
                ${isHovered ? "bg-gray-300" : ""} select-none cursor-pointer rounded-full`} 
                onClick={props.closeMenu} 
                onMouseOver={handleHover} 
                onMouseOut={handleHover}>
                    <FontAwesomeIcon icon={faTimes}/>
                </div>
                <div className="pl-2 font-bold">Menu</div>
            </div>

            <ul className="px-2 border-t border-b">
                <li className="px-2 text-gray-500 font-semibold text-sm pt-4 pb-2" >
                    Categories
                </li>
                {navigationMenuCategories.map(category =>{
                    return (
                        <li className="h-12 flex justify-center">
                            <NavigationMenuCategory key={category.id} category={category} />
                        </li>
                        );
                })}
            </ul>

            <ul className="px-2">
                <li className="px-2 text-gray-500 font-semibold text-sm pt-4 pb-2" >
                    Customer's Help
                </li>

                <li className="h-12 flex justify-center">
                    <NavigationMenuCategory key={customersHelp.id} category={customersHelp} />
                </li>
            </ul>
        </nav>

    );
}