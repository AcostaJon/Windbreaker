'use client'
export default function Today(props) {

    if (props.todayWeather) {

        return (
            <>
                <div className="container-fluid row text-white px-3 align-items-center my-3" id="Today">
                    {/* temp and location */}
                    <div className="col-7 pb-2 pt-4">
                        <p className="fontSize48 fontSize100lg mb-2">{props.todayWeather.temp}&deg;</p>
                        <p className="mb-0 fontSize24Lg fst-italic">{props.todayWeather.conditionText}</p>
                        <p className="mb-0 my-md-2 fst-italic fontSize24Lg">{props.todayWeather.name}, {props.todayWeather.region}</p>
                        <p className="mb-0 fontSize24Lg fst-italic">{props.todayWeather.temp} Feels like {props.todayWeather.feelsLike}</p>
                    </div>
                    {/* condition icon */}
                    <div className="col-4 col-md-5 text-center">
                        <img id="todayIcon" src={props.todayWeather.conditionIcon} />
                    </div>
                </div>
            </>
        );

    } else {

        return (
            <>
                <h1  className="text-white">loading...</h1>
            </>
        );

    }



}
