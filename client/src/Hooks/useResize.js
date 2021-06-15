import {useEffect, useState} from 'react';

export default function useResize(myRef){
    const [width, setWidth] = useState(0);

    useEffect(()=>{
        setWidth(myRef.current.offsetWidth);

        function handleResize(){
            setWidth(myRef.current.offsetWidth);
        }
        window.addEventListener('resize', handleResize);
        return ()=>{
            window.removeEventListener('resize', handleResize);
        }
    },[myRef]);

    return {width};
}