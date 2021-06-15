import React from "react";
import StockUpadeBar from "./StockUpdateBar";
import CountdownTimer from "./CountdownTimer";
import DiscountedProduct from "../../Views/DiscountedProduct";


export default function HotDeal(props){

    const {productData} = props;
    const {name, price, discountedPrice, inStock, sold, images, dealDeadline} = productData[0];
    const discountPercentage = Math.floor(parseInt(discountedPrice,10) / parseInt(price,10) * 100);

    return (
        <div className="rounded-xl overflow-hidden border-2 border-pink-500 p-5 lg:px-3 " >
            <div className="w-full relative">
                <h1 className="text-2xl font-semibold">Hot deal</h1>

                <div className="absolute top-0 right-0 z-10 bg-gray-500 text-white rounded-xl py-1 px-3 ">
                    <div className="text-center">Save</div>
                    <span className="text-center text-xl px-4">{`${discountPercentage}%`} </span>
                </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-col">
                <div className="md:w-1/2 lg:w-auto">
                    <DiscountedProduct name={name} images={images} />
                </div>
                <div className="w-full md:w-1/2 md:flex md:flex-col md:justify-end lg:w-full lg:block">
                    <div className="mt-3 md:flex md:justify-center md:items-center md:pb-5 lg:pb-0 lg:block">
                        <span className="block text-gray-500 text-center text-lg line-through ">{`${productData[0].price} $` }</span>
                        <span className="block text-center text-pink-500 text-3xl font-bold">{`${productData[0].discountedPrice} $` }</span>
                    </div>
                    <div className="lg:py-6">
                        <StockUpadeBar inStock={inStock} sold={sold}/>
                    </div>
                    <div className="flex flex-col items-center mt-3">
                        <span className="mb-1">Hurry up, there's no much time left:</span>
                        <CountdownTimer dealDeadline={dealDeadline}/>
                    </div>
                </div>
            </div>

        </div>
    );
}

