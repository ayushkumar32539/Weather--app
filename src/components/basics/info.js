import React, {useEffect}from 'react';

const Info = (tempinfo) => {
    const [weatherState, setWeatherState] = React.useState("");
    const{
        temp,
        humidity,
        pressure,
        weathertype,
        name,
        speed,
        country,
        sunset,
    } = tempinfo;

    useEffect(() => {
     if(weathertype){
         switch(weathertype){
             case"Clouds": 
             setWeatherState("wi-day-cloudy");
             break;
             
             case"Clear": 
             setWeatherState("wi-day-sunny");
             break;
             
             case"Haze": 
             setWeatherState("wi-fog");
             break;
             
             // eslint-disable-next-line no-duplicate-case
             case"Clouds": 
             setWeatherState("wi-day-cloudy");
             break;

             default:
                 setWeatherState("wi-day-sunny")
                 break;
         }
        }
    }, [weathertype])

    let sec = sunset;
    let date = new Date(sec * 1000);
    let timestr = `${date.getHours()}:${date.getMinutes()}`
    return (
        <>
           <div className="body">
                <div className="icon">
                    <i className={`wi ${weatherState}`}></i>
                </div>

                <div className="weatherinfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
 
                    <div className="info">
                        <div className="weathercd">{weathertype}</div>
                        <div className="place">{name},{country}</div>
                    </div>
                </div>
             <div className="datentime">{ new Date().toLocaleString()}</div>
                
            <div className="extratemp">
                <div className="minmaxtemp">
                    <div className="sections">
                    <p className="leftside">
                     {timestr} PM <br />
                        sunset
                    </p>
                </div>

                <div className="sections">
                    
                    <p className="leftside">
                    {humidity} <br />
                        humidity
                    </p>
                </div>
             </div>

             <div className="moreweatherinfo">
                <div className="sections">
                   
                    <p className="leftside">
                     {speed} <br />
                        Windspeed
                    </p>
                </div>

                <div className="sections">
                   
                    <p className="leftside">
                     {pressure} <br />
                        pressure
                    </p>
                 </div>
                </div>
            </div>
         </div>
  
        </>
    )
}

export default Info
