import React from "react";
import NavigationMenuMain from "./NavigationMenuMain/NavigationMenuMain";
import NavigationMenuSide from "./NavigationMenuSide/NavigationMenuSide";
import CompanyLogo from "../CompanyLogo.png";
import {faPhone, faShoppingBasket, faUser} from "@fortawesome/free-solid-svg-icons";
import HeaderIcon from '../Views/HeaderIcon';
import {Link} from "react-router-dom";

export default function Header(){
    return(
        <header className="bg-white py-2">

            <div className="shadow-md  md:flex-col md:items-start ">
                <div className="flex px-5 lg:px-10 justify-between items-center mx-auto lg:max-w-screen-xl 2xl:max-w-screen-2xl">
                    <Link to={`/`}>
                        <img className="w-16 h-16" alt="appLogo" src={CompanyLogo} />
                    </Link>
                    <div className="flex items-center h-10">
                        <Link to={`/account`}>
                            <HeaderIcon iconType={faUser} iconText="Account"/>
                        </Link>
                        <Link to={`/basket`}>
                            <HeaderIcon iconType={faShoppingBasket} iconText="Basket"/>
                        </Link>
                        <Link to={`/contact`}>
                            <HeaderIcon iconType={faPhone} iconText="Contact"/>
                        </Link>
                        <NavigationMenuSide />
                    </div>
                </div>

                <NavigationMenuMain />
            </div>
        </header>
    );
}