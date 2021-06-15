import React from "react";
import ContactInfo from "./ContactInfo/ContactInfo"

export default function Footer(){
    return(
        <div className="m-auto lg:max-w-screen-xl 2xl:max-w-screen-2xl">
            <div className="mx-5  lg:border-gray-300 lg:border-t">
                <ContactInfo />
                <footer className="bg-white text-center text-xs p-3 absolute bottom-0 w-full">
                    &copy; Copyright 2021
                </footer>
            </div>
        </div>


    );
}