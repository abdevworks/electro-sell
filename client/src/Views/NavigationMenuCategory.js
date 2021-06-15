import React, {useState} from 'react';

export default function NavigationMenuCategory(props){
    const {name,icon} = props.category;

    const [isHovered, setIsHovered] = useState(false);

    function handleHover(){
        setIsHovered(!isHovered);
    }

    return (
        <div className={`px-2 text-sm w-full flex items-center cursor-pointer rounded-xl ${isHovered ? "shadow-md bg-white" : ""}`} onMouseOver={handleHover} onMouseOut={handleHover}>
            <div className="flex items-center justify-center">
                {icon}
            </div>
            <div className="leading-4 ml-2 h-full w-full flex items-center">{name}</div>
        </div>
    )
}