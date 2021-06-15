import ComputerIcon from "../../Icons/ComputerIcon.svg";
import smartphone from "../../Icons/smartphone.png";
import gameController from "../../Icons/gameController.png";
import videoCard from "../../Icons/videoCard.png";
import printer from "../../Icons/printer.png";
import tv from "../../Icons/tv.png";
import home from "../../Icons/home.png";
import usb from "../../Icons/usb.png";

export const navigationMenuCategories = [
    {
        id: 1,
        name: 'Laptops and Computers',
        icon: <img className="w-7 h-6" alt="appLogo" src={ComputerIcon} />
    },
    {
        id: 2,
        name: 'Smartphones & Smartwatches',
        icon: <img className="w-7 h-6" alt="appLogo" src={smartphone} />
    },
    {
        id: 3,
        name: 'Gaming & Streaming',
        icon: <img className="w-7 h-6" alt="appLogo" src={gameController} />
    },
    {
        id: 4,
        name: 'PC Parts',
        icon: <img className="w-7 h-6" alt="appLogo" src={videoCard} />
    },
    {
        id: 5,
        name: 'Peripherials',
        icon: <img className="w-7 h-6" alt="appLogo" src={printer} />
    },
    {
        id: 6,
        name: 'TV & Audio',
        icon: <img className="w-7 h-6" alt="appLogo" src={tv} />
    },
    {
        id: 7,
        name: 'Smarthome & Lifestyle',
        icon: <img className="w-7 h-6" alt="appLogo" src={home} />
    },
    {
        id: 8,
        name: 'Accessories',
        icon: <img className="w-7 h-6" alt="appLogo" src={usb} />
    }
];