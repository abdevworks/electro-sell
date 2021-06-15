import React, {useState, useEffect} from "react";
import {useTransition, animated} from 'react-spring'

export default function BannerAd(){

    const [index, set] = useState(0); //slide index
    const  [direction, setDirection] = useState(1); //animation direction
    const [slides, setSlides] = useState([]);
    
    const transitions = useTransition(slides[index],  {
        from: {opacity: 0, transform: `translateX(${100 * direction}%)` },
        enter: { opacity: 1, transform: `translateX(0%)` },
        leave: { opacity: 0, transform: `translateX(${-100 * direction}%)` },
    });

    useEffect(() => {
        fetch("/.netlify/functions/server/api/banners").then(
            response => response.json()
        ).then(data => {
            setSlides(data);
        })
    }, []);
    
    useEffect(() =>{
        const intervalId = setInterval(() => {
            setDirection(1);
            set(state => (state + 1) % slides.length);
        }, 5000);
        return ()=>{
            //cleanup function
            clearInterval(intervalId);
        }
    },[slides]);

    function handleRightClick(){
        setDirection(1);
        set(state => (state + 1) % slides.length);
    }

    function handleLeftClick(){
        setDirection(-1);
        if(index > 1){
            set(state => (state - 1) % slides.length); 
        }else{
            set(slides.length-1);
        }
        
    }

    return(
        <div className="relative px-5 pt-3 pb-5 lg:px-8 bg-white">
            <div className="flex items-center overflow-hidden rounded-xl shadow-lg">
            <div 
                className="absolute z-10 left-0 lg:left-2  border-1 border-black rounded-full h-10 w-10 lg:h-11 lg:w-11 2xl:h-12 2xl:w-12 flex items-center justify-center font-bold bg-white shadow-md cursor-pointer  select-none" 
                onClick={handleLeftClick}>
                {"<"}
            </div>

            <div className="h-48 md:h-52 lg:h-64 2xl:h-80 w-full relative">
                {
                transitions(( props,item, key ) => (
                    <animated.div
                        key={key}
                        className="h-48 md:h-52 lg:h-64 2xl:h-80 w-full absolute"
                        style={{ ...props}}
                    >
                    <img className="block mx-auto w-full rounded-xl" draggable="false" alt="discounted product" src={`https://images.unsplash.com/${item.url}`} />
                    </animated.div>
                ))}
            </div>

            <div 
                className="absolute z-10 right-0 lg:right-2 border-1 border-black rounded-full h-10 w-10 lg:h-11 lg:w-11 2xl:h-12 2xl:w-12 flex items-center justify-center  font-bold bg-white shadow-md cursor-pointer select-none" 
                onClick={handleRightClick}>
                {">"}
            </div>
            </div>

        </div>

    );
}

