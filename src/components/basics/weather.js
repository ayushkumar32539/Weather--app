import React , {useState, useEffect} from "react";
import "../basics/style.css";
import Info from "../basics/info"

const Weather = () => {
    const [searchValue, setsearchValue] = useState ("mainpuri");
    const [tempinfo , setTempinfo] = useState({});

    const getWeatherInfo = async () => {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=61074d6c44ede0cd7855f7c1cf5292b6`;
            
            let res = await fetch(url);
            let data = await res.json();

                   const{temp,humidity,pressure} = data.main;
                   const{main: weathertype} = data.weather[0];
                   const{name} = data;
                   const{speed} = data.wind;
                   const{country,sunset} = data.sys;
                
                   const myapplication = {
                       temp,
                       humidity,
                       pressure,
                       weathertype,
                       name,
                       speed,
                       country,
                       sunset,
                   };

                   setTempinfo(myapplication);
    
                }  catch (error){
            console.log(error);
        }
     
    };

    useEffect(() => {
        getWeatherInfo();
    }, []);
    return (
        <>
        <div className="header">
            <div className="Search">
                <input type="Search" placeholder="location...."
                autoFocus
                className="Searchbutton" 
                value={ searchValue}
                onChange={(e)=> setsearchValue(e.target.value)} />
                <button className="schbtn"  type="button" onClick={getWeatherInfo}>Search</button>
             </div>    
        </div>
             
             <Info {...tempinfo}/>
             </>
    );
};

export default Weather;
