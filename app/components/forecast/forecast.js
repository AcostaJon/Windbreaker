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
                    <div className="d-flex align-items-center justify-content-between py-2 py-md-2 rounded px-3 " id="windStatContainer">
                        <p className="mb-0 fontSizeMd"><img src="/cloud-solid.svg" className="mb-1 windIconSize" /> <br/> {props.todayWeather.cloudCover}%</p>
                        <p className="mb-0 fontSizeMd"><img src="/compass-regular.svg" className="mb-1 windIconSize" /> <br/> Winds|{props.todayWeather.windDirection}</p>
                        <p className="mb-0 fontSizeMd"><img src="/wind-solid-white.svg" className=" mb-1 windIconSize"/> <br/> {Math.round(props.todayWeather.windSpeed)}mp/h</p>
                    </div>
                    {/* forecast day 1-3 */}
                    <div className="row p-0 justify-content-between mt-3 ">
                        {/* 1st day */}
                        <div className="col-3  d-flex flex-column justify-content-evenly align-items-center px-1 pt-md-1 rounded " id="firstDayContainer">
                            <p className="my-2 my-md-0 fontSizeMd">{formatDate(props.forecast.day1Forecast.date)}</p>
                            <p className="my-2 mt-md-1 mb-0 fontSizeMd">{Math.round(day1.maxtemp_f)}&deg;</p>
                            <img className="my-1 my-md-1 " src={day1.condition.icon}/>
                            <p className="my-2 my-md-0 fontSizeSm  fontSizeMd">{day1.condition.text}</p>
                        </div>
                        {/* 2st day */}
                        <div className="col-3 d-flex flex-column justify-content-evenly align-items-center px-1 pt-md-1 rounded" id="secondDayContainer">
                            <p className="my-2 my-md-0 fontSizeMd">{formatDate(props.forecast.day2Forecast.date)}</p>
                            <p className="my-2 mt-md-1 mb-0 fontSizeMd">{Math.round(day2.maxtemp_f)}&deg;</p>
                            <img className="my-1 my-md-1 "  src={day2.condition.icon}  /> 
                             <p className="my-2 my-md-0 fontSizeSm  fontSizeMd">{day2.condition.text}</p>
                        </div>
                        {/* 3st day */}
                        <div className="col-3  d-flex flex-column justify-content-evenly align-items-center px-1 pt-md-1 rounded" id="thirdDayContainer">
                            <p className="my-2 my-md-0  fontSizeMd">{formatDate(props.forecast.day3Forecast.date)}</p>
                            <p className="my-2 mt-md-1 mb-0 fontSizeMd">{Math.round(day3.maxtemp_f)}&deg;</p>
                            <img className="my-1 my-md-1" src={day3.condition.icon} />
                            <p className="my-2 my-md-0  fontSizeSm  fontSizeMd">{day3.condition.text}</p>
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
