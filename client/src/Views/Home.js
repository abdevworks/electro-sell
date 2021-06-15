import React from "react";
import BannerAd from "../Components/BannerAd/BannerAd";
import HotDeal from "../Components/HotDeal/HotDeal";
import ProductDataProvider from "../Components/DataProvider/ProductDataProvider";
import ShopSection from "../Components/ScrollableShopSection/ShopSection";
import ProductCard from '../Components/ScrollableShopSection/ProductCard';
import CategoryCard from '../Components/ScrollableShopSection/CategoryCard';



function Home(){

    //const url = `https://602a44aa6c995100176ee169.mockapi.io/products?page=1&limit=10`;
    const productUrl = `/api/products`;
    const hotDealUrl = `/api/hot_deal`;
    const promotionsUrl = `/api/promotions`;

    const hotDealElement = <ProductDataProvider url={hotDealUrl} component={HotDeal}/>;


    return(
        <div className="bg-white">
            <div className="m-auto lg:max-w-screen-xl 2xl:max-w-screen-2xl">
                <BannerAd />
                <div className="pb-1 bg-gray-100  lg:border-gray-300 lg:pb-0">
                    <div className="lg:grid lg:grid-cols-12">
                        <div className="mb-4 bg-white p-5 mt-3 lg:col-span-4 lg:mt-0 lg:pl-8 lg:pr-8 lg:mb-0">
                            {hotDealElement}
                        </div>
                        <div className="lg:col-span-8 lg:pr-8 lg:bg-white lg:pt-5">
                            <ShopSection sectionName="Best Sellers" apiURL={productUrl}  componentCard={ProductCard} sectionLink={false} displayAsRows={true}/>
                        </div>
                    </div>
                    <ShopSection sectionName="Recommended" apiURL={productUrl} componentCard={ProductCard}/>
                    <ShopSection sectionName="Promotions" apiURL={promotionsUrl} componentCard={CategoryCard} componentCardSize={"medium"}/>
                </div>
               
            </div>
        </div>
    );
}

export default Home;