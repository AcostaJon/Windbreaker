'use client'
import { useState, useEffect } from "react";

export default function Forecast(props) {
    const [day1, setDay1] = useState();
    const [day2, setDay2] = useState();
    const [day3, setDay3] = useState();

    useEffect(() => {
        setDay1(props.forecast.day1Forecast.day)
        setDay2(props.forecast.day2Forecast.day)
        setDay3(props.forecast.day3Forecast.day)
    })


    const formatDate = (date) => {
        const formatedDate = date.slice(5, date.length)
        return formatedDate
    }

    // load data first to state, if true then render ui
    if (day1) {
        return (
            <>
                <div className="row container-fluid text-white px-3 py-3 mb-2 mt-md-4 justify-content-evenly text-center rounded shadow-lg fontSize12Lg" id="Forecast">
                    {/* wind stats */}
                    <div className="d-flex align-items-center justify-content-between bg-primary pt-2 py-md-1 rounded px-3">
                        <p className="mb-0 fontSize24Lg"><img src="/cloud-solid.svg" className="mb-1" width={25}/> <br/> {props.todayWeather.cloudCover}%</p>
                        <p className="mb-0 fontSize24Lg"><img src="/compass-regular.svg" className="mb-1" width={25}/> <br/> Winds|{props.todayWeather.windDirection}</p>
                        <p className="mb-0 fontSize24Lg"><img src="/wind-solid-white.svg"  width={15} className=" mb-1"/> <br/> {Math.round(props.todayWeather.windSpeed)}mp/h</p>
                    </div>
                    {/* forecast day 1-3 */}
                    <div className="row p-0 justify-content-between mt-3 ">
                        {/* 1st day */}
                        <div className="col-3  d-flex flex-column justify-content-evenly align-items-center px-1 pt-md-1 bg-primary rounded">
                            <p className="my-2 my-md-0 fontSize14 fontSize24Lg">{formatDate(props.forecast.day1Forecast.date)}</p>
                            <p className="my-2 mt-md-1 mb-0 fontSize24Lg">{Math.round(day1.maxtemp_f)}&deg;</p>
                            <img className="my-1 my-md-1 iconForecastLg" src={day1.condition.icon}/>
                            <p className="my-2 my-md-0 fontSize14 fontSize24Lg">{day1.condition.text}</p>
                        </div>
                        {/* 2st day */}
                        <div className="col-3 d-flex flex-column justify-content-evenly align-items-center px-1 pt-md-1  bg-primary rounded">
                            <p className="my-2 my-md-0 fontSize14 fontSize24Lg">{formatDate(props.forecast.day2Forecast.date)}</p>
                            <p className="my-2 mt-md-1 mb-0 fontSize24Lg">{Math.round(day2.maxtemp_f)}&deg;</p>
                            <img className="my-1 my-md-1 iconForecastLg"  src={day2.condition.icon}  /> 
                             <p className="my-2 my-md-0 fontSize14 fontSize24Lg">{day2.condition.text}</p>
                        </div>
                        {/* 3st day */}
                        <div className="col-3  d-flex flex-column justify-content-evenly align-items-center px-1 pt-md-1  bg-primary rounded">
                            <p className="my-2 my-md-0 fontSize14 fontSize24Lg">{formatDate(props.forecast.day3Forecast.date)}</p>
                            <p className="my-2 mt-md-1 mb-0 fontSize24Lg">{Math.round(day3.maxtemp_f)}&deg;</p>
                            <img className="my-1 my-md-1 iconForecastLg" src={day3.condition.icon} />
                            <p className="my-2 my-md-0 fontSize14 fontSize24Lg">{day3.condition.text}</p>
                        </div>
                    </div>
                </div>
            </>
        );


    } else {

        return (

            <>
                <h1 className="text-white">
                    loading...
                </h1>
            </>
        );

    }


}
