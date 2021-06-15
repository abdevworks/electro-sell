import React from 'react';
import {faPhoneAlt, faEnvelope, faMapMarkerAlt, } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faYoutube, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export default function ContactInfo(){
    return(
    <div className="p-5 border-gray-300 border-b grid text-gray-600">
        <h2 className="mb-4 text-xl font-bold">Contact</h2>
        <div className="flex">
            <div className="flex items-center justify-center p-2 h-8 w-11 ">
                <FontAwesomeIcon icon={faPhoneAlt}/>
            </div>
            <p className="text-lg font-medium flex items-center">12 345 66 77</p>
        </div>

        <div className="flex text-xs pl-8">
            <div className="flex flex-col mr-2">
                <span>mon. - fri.</span>
                <span>sat. - sun.</span>
            </div>
            <div className="flex flex-col">
                <span>8:00 - 21:00</span>
                <span>8:00 - 19:00</span>
            </div>
        </div>
        <div className="flex py-1">
            <div className="flex items-center justify-center p-2 h-8 w-11">
                <FontAwesomeIcon icon={faEnvelope}/>
            </div>
            <p className="flex items-center text-sm">e-sell@e-sell.com</p>
        </div>
        <div className="flex py-1">
            <div className="flex items-center justify-center p-2 h-8 w-11">
                <FontAwesomeIcon icon={faMapMarkerAlt}/>
            </div>
            <p className="flex items-center text-sm">Store e-sell</p>
        </div>

        <div className="flex pt-5 ">
            <div className="h-12 w-12 text-lg flex justify-center items-center">
                <FontAwesomeIcon icon={faFacebook}/>
            </div>
            <div className="h-12 w-12 text-lg flex justify-center items-center">
                <FontAwesomeIcon icon={faInstagram}/>
            </div>
            <div className="h-12 w-12 text-lg flex justify-center items-center">
                <FontAwesomeIcon icon={faYoutube}/>
            </div>
            <div className="h-12 w-12 text-lg flex justify-center items-center">
                <FontAwesomeIcon icon={faTwitter}/>
            </div>
        </div>

    </div>
    );
}