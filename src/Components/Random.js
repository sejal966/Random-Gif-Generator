import react, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () =>{

    // const[gif, setGif] = useState('');
    // const[loading, setLoading] = useState(false);

    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     console.log(imageSource);
    //     setGif(imageSource);
    //     setLoading(false);
    // }

    // useEffect( () => {
    //     fetchData();
    // },[])

    const {gif, loading, fetchData} = useGif();
    
    function clickHandler(){
          fetchData();
    }

    return(
        <div className="w-1/2 bg-green-400 rounded-xl border border-black
         flex flex-col gap-y-5 mt-[15px] items-center">
           <h1 className="mt-[15px] text-xl underline uppercase font-bold">A Random Gif</h1>
           
           {
            loading ? (<Spinner />) : (<img src={gif} width="450"/>)
           }
           <button onClick={clickHandler}
           className="w-10/12 bg-yellow-500 text-lg py-1 rounded-lg mb-[20px]">
            Generate
           </button>
        </div>
    )
}

export default Random;