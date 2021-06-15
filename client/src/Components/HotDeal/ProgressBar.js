import React, {useState, useRef, useEffect} from 'react';
import useResize from '../../Hooks/useResize';

export default function ProgressBar(props){

    const {percent} = props;
    const ref = useRef();
    const [progress, setProgress] = useState(0);
    const {width} = useResize(ref);

    useEffect(() => {
        setProgress(width * percent);
    },[width, percent]);

    return(
        <div ref={ref} className="h-2 bg-gray-300 rounded-xl overflow-hidden w-full" >
            <div className="bg-blue-400 h-2" style={{width: `${progress}px`}}></div>
        </div>
    );
}