import React, {useState} from "react";


function ProductCard(props){

    const [isHovered, setIsHovered] = useState(false);

    function handleHover(){
        setIsHovered(!isHovered);
    }

    return(
        <div className={`h-64 w-full p-2 m-auto lg:mb-4 ${isHovered ? "shadow-md" : ""} overflow-hidden select-none cursor-pointer rounded-xl`} onMouseOver={handleHover} onMouseOut={handleHover}>
            <div className="flex flex-col h-full">
                <div 
                //to={`/products/${props.product.id}`}
                className="h-2/3 overflow-hidden flex items-center justify-center"
                >
                    <div className="px-1 w-40 h-40 bg-no-repeat bg-center bg-contain" style={{backgroundImage: `url(${props.product.images[0].image})`}}>
        
                    </div>
                </div>

                <div className="h-1/3 px-2 w-full flex flex-col justify-between">

                    <span className="text-sm">
                        {props.product.name}
                    </span>

                    <div className=" text-sm" draggable="false">
                        {props.product.price}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProductCard;

{/* <Link to={`/products/${props.product.id}`} draggable="false" >
    {props.product.name}
</Link> */}