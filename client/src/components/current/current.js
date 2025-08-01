// import usecontext hook
import { useContext } from "react"
// import context client
import { MyContext } from "../MyContext"
export default function Current(params) {
    // context api
    const contextValue = useContext(MyContext);
    return(
        <>
            <div id="current">
                {/* data */}
                <div id="currentSideA">
                    <h1>{Math.round(contextValue.currentTemp)}<sup>&#176;</sup></h1>
                    <p>{contextValue.conditionText}</p>
                    <p>{contextValue.location}, {contextValue.region}</p>
                    <p>{Math.round(contextValue.currentTemp)} Feels like {Math.round(contextValue.feelsLike)}</p>
                    <p>{contextValue.currentTime}</p>
                </div>
                {/* current condition */}
                <div id="currentSideB">
                    {/* if isDay is 0 show sun, if isDay is 1 show moon */}
                    {contextValue.isDay ? <svg className="currentWeatherImg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#FFD43B" d="M210.2 53.9C217.6 50.8 226 51.7 232.7 
                    56.1L320.5 114.3L408.3 56.1C415 51.7 423.4 50.9 430.8 53.9C438.2 56.9 443.4 63.5 445 71.3L465.9 174.5L569.1 195.4C576.9 197 583.5 202.4 586.5 209.7C589.5 217 588.7 225.5 
                    584.3 232.2L526.1 320L584.3 407.8C588.7 414.5 589.5 422.9 586.5 430.3C583.5 437.7 576.9 443.1 569.1 444.6L465.8 465.4L445 568.7C443.4 576.5 438 583.1 430.7 586.1C423.4 589.1 414.9 588.3 408.2 583.9L320.4 
                    525.7L232.6 583.9C225.9 588.3 217.5 589.1 210.1 586.1C202.7 583.1 197.3 576.5 195.8 568.7L175 465.4L71.7 444.5C63.9 442.9 57.3 437.5 54.3 430.2C51.3 422.9 52.1 414.4 56.5 407.7L114.7 
                    320L56.5 232.2C52.1 225.5 51.3 217.1 54.3 209.7C57.3 202.3 63.9 196.9 71.7 195.4L175 174.6L195.9 71.3C197.5 63.5 202.9 56.9 210.2 53.9zM239.6 320C239.6 275.6 275.6 239.6 320 239.6C364.4 239.6 400.4 275.6 
                    // 400.4 320C400.4 364.4 364.4 400.4 320 400.4C275.6 400.4 239.6 364.4 239.6 320zM448.4 320C448.4 249.1 390.9 191.6 320 191.6C249.1 191.6 191.6 249.1 191.6 320C191.6 390.9 249.1 448.4 320 448.4C390.9 448.4 448.4 390.9 448.4 320z"/>
                    </svg> : <svg className="currentWeatherImg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#fb8b35" d="M320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576C388.8 576 451.3 548.8 497.3 504.6C504.6 497.6 506.7 486.7 502.6 477.5C498.5 468.3 488.9 462.6 478.8 463.4C473.9 463.8 469 464 464 464C362.4 464 280 381.6 280 280C280 207.9 321.5 145.4 382.1 115.2C391.2 110.7 396.4 100.9 395.2 90.8C394 80.7 386.6 72.5 376.7 70.3C358.4 66.2 339.4 64 320 64z"/></svg> }
                </div>
            </div>
        </>
    )
}