import React from 'react';
import NavigationMenuCategory from '../../Views/NavigationMenuCategory';
import {navigationMenuCategories} from "../NavigationMenuCategories/navigationMenuCategories"


export default function NavigationMenuMainCategories(props){
    return(
        <div className="shadow-sm h-12 bg-gray-100">
            <div className="flex  h-12 px-4 lg:px-10 m-auto lg:max-w-screen-xl 2xl:max-w-screen-2xl">
                {navigationMenuCategories.map(category =>{
                    return <NavigationMenuCategory key={category.id} category={category} />;
                })}
            </div>
        </div>

    );
}