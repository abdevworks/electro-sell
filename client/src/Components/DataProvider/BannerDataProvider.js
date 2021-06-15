import React, {useEffect} from "react";
import Loader from "./Loader";
import { useAxiosGet } from "../../Hooks/HttpRequests";


export default function useBannerGet(props){

    const url = props.url;
    let slides = useAxiosGet("/.netlify/functions/server/api/banners");
    let content = null;
    const {componentCardSize, displayAsRows} = props;

    useEffect(() => {
        fetch("/.netlify/functions/server/api/banners").then(
            response => response.json()
        ).then(data => {
            console.log(data);
        });
    }, []);

    if(slides.error){
        content = 
        <p>
            There was an error please refresh or try again later
        </p>
    }

    if(slides.loading){
        content = <Loader />
    }

    if(slides.data){
        content = <props.component componentCard={props.componentCard} productData={products.data} componentCardSize={componentCardSize} displayAsRows={displayAsRows}/>
    }

    return(
        content
    );
}