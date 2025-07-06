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
                <div>
                    <h1>{Math.round(contextValue.currentTemp)}<sup>o</sup></h1>
                    <p>{contextValue.conditionText}</p>
                    <p>{contextValue.location}</p>
                    <p>{contextValue.region}</p>
                    <p>{Math.round(contextValue.currentTemp)} feels like {Math.round(contextValue.feelsLike)}</p>
                    <p>{contextValue.currentTime}</p>
                </div>
                {/* current condition */}
                <div>
                    <img src={contextValue.conditionIcon}/>
                </div>
            </div>
        </>
    )
}