'use client'
import { useEffect, useRef } from "react";
export default function Today(props) {
    const imgIconRef = useRef(null)

    useEffect(() => {
        // if todaysIcon is true and not null, then add animate class
        if (imgIconRef) {
            setTimeout(() => {
                imgIconRef.current.classList.add('rotate-center')
            }, "1000");
        }
    }, [])

    // get current time
    const now = new Date();
    // time options
    const options = {
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
    };
    // format time
    const formattedDateTime = now.toLocaleDateString('en-US', options);

    if (props.todayWeather) {
        return (
            <>
                <div className="container-fluid row text-white px-3 align-items-center my-3" id="Today">
                    {/* temp and location */}
                    <div className="col-7 pb-2 pt-4">
                        <p className="mb-2" id="currentTemp">{Math.round(props.todayWeather.temp)}&deg;</p>
                        <p className="mb-0 fontSizeMd fst-italic">{props.todayWeather.conditionText}</p>
                        <p className="mb-0 my-md-2 fst-italic fontSizeMd">{props.todayWeather.name}</p>
                        <p className="mb-0 fontSizeMd fst-italic">{Math.round(props.todayWeather.temp)}&deg; Feels like {Math.round(props.todayWeather.feelsLike)}&deg;</p>
                        <p className="fontSizeMd fst-italic">{formattedDateTime}</p>
                    </div>
                    {/* condition icon */}
                    <div className="col-4 col-md-5 text-center">
                        <img ref={imgIconRef} id="todayIcon" className="shadow-lg rounded-pill" src={props.todayWeather.conditionIcon} />
                    </div>
                </div>
            </>
        );
    } else {

        return (
            <>
                <h1 className="text-white">loading...</h1>
            </>
        );

    }



}
