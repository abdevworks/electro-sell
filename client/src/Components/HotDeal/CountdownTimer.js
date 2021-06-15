import React, {useState, useEffect} from 'react';

export default function CountdownTimer(props){

    const dealTime = props.dealDeadline;

    

    const calculateTimeLeft = () => {
        let difference = +new Date(dealTime) - +new Date();      
        let timeLeft = {};
        
        if(difference < 0){//if time ended set the timer to 0
            difference = 0;
        }

        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };

      return timeLeft;
    
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setTimeLeft(calculateTimeLeft());
        },1000);

        return ()=> clearTimeout(timer);
    });

    const timerComponents = [];

    /*Format displayed time*/
    Object.keys(timeLeft).forEach((interval) => {
        if(!timeLeft[interval]){
            timerComponents.push("00");
        }if(timeLeft[interval] < 10){
            timerComponents.push(`0${timeLeft[interval]}`);
        }else{
            timerComponents.push(timeLeft[interval]);
        }     
    });


    return(
        <div className="flex">
            <div>
                <div className="bg-gray-300 rounded-xl text-2xl h-14 w-14 flex justify-center items-center">{timerComponents[1]}</div>
                <span className="block text-center">hours</span>
            </div>
            <div className="flex justify-center px-2 text-2xl pt-2">:</div>
            <div></div>
            <div>
                <div className="bg-gray-300 rounded-xl text-2xl h-14 w-14 flex justify-center items-center">{timerComponents[2]}</div>
                <span className="block text-center">min.</span>
            </div>
            <div className="flex justify-center px-2 text-2xl pt-2">:</div>
            <div>
                <div className="bg-gray-300 rounded-xl text-2xl h-14 w-14 flex justify-center items-center">{timerComponents[3]}</div>
                <span className="block text-center">sec.</span>
            </div>
        </div>
    );
}