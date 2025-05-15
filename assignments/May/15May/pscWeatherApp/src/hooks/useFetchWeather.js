import { useState,useEffect, use } from "react";


const API_KEY = '37998bf618b60a9e8d870d95ce3ee522';


function useFetchWeather(city){
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false)
    const [data,setData]=useState(null)

    useEffect(()=>{
        if(!city) return ;
        const fetchweather=async()=>{
            setLoading(true);
            setError(null);
            setData(null);
            try{
                const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
                const result = await res.json();
                if(!res.ok){
                    return setError("Enter Correct City Name");
                }
                setData(result);

            }catch(error){
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }
        fetchweather();

    },[city])
    return {data,error,loading}

};

export default useFetchWeather;