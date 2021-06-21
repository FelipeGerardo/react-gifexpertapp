import { useEffect, useState } from "react"
import { getGifts } from "../helpers/GetGifts";


export const useFetchGifs = (category) => {
    
    const [state, setstate] = useState({
        data:[],
        loading: true
    });

    useEffect(()=>{
        getGifts(category)
            .then( imgs =>{
                    console.log(imgs)
                    setstate({
                        data: imgs,
                        loading:false
                    });
            })
    }, [category]);

    
    return state; // {data:[], loading: true};
}
