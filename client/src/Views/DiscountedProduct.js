import React from "react";

export default function DiscountedProduct(props){

    const {name, images} = props;

    return(
        <div className="flex flex-col">
            <div className="flex justify-center h-64 w-auto  mx-auto overflow-hidden pt-4">
                <img 
                src={images[0].image}
                className="object-co h-full rounded-xl "
                alt="discounted product"/>
            </div>

            <span className="text-center text-lg block mt-1">{name}</span>

        </div>
    );
}