import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';



export default function HeaderIcon(props){


    return(
        <div className="px-2 flex flex-col items-center justify-center h-10 cursor-pointer"  >
            <div className="h-6 text-lg">
                <FontAwesomeIcon icon={props.iconType}/>
            </div>
            
            <div className="text-xs">{props.iconText}</div>
        </div>
    );
}