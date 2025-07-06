// import usecontext hook
import { useContext } from "react"
// import context client
import { MyContext } from "../MyContext"

export default function Forecast() {

    // context api
    const contextValue = useContext(MyContext);

    return (
        <>
            <div id="forecast">
                {/* cloud cover, wind direction, humidity */}
                <div id="coverDirecHumid">
                    {/* cloud cover */}
                    <div>
                        <img src="./cloud-sun-solid.svg" />
                        <p>{contextValue.cloudCover}%</p>
                    </div>
                    {/* wind direction */}
                    <div>
                        <img src="./compass-solid.svg" />
                        <p>{contextValue.windDirection}</p>
                    </div>
                    {/* humidity */}
                    <div>
                        <img src="./droplet-solid.svg" />
                        <p>{contextValue.humidity}%</p>
                    </div>
                </div>
                {/* forecast */}
                <div id="forecastDays">
                    {/* forecast day 1 */}
                    <div>
                        <p>{contextValue.day1Date.slice(5,10)}</p>
                        <p>{Math.round(contextValue.day1Temp)}<sup>o</sup></p>
                        <img src={contextValue.day1ConditionIcon} />
                        <p>{contextValue.day1ConditionText}</p>
                    </div>
                    {/* forecast day 2 */}
                    <div>
                        <p>{contextValue.day2Date.slice(5,10)}</p>
                        <p>{Math.round(contextValue.day2Temp)}<sup>o</sup></p>
                        <img src={contextValue.day2ConditionIcon} />
                        <p>{contextValue.day2ConditionText}</p>
                    </div>
                    {/* forecast day 3 */}
                    <div>
                        <p>{contextValue.day3Date.slice(5,10)}</p>
                        <p>{Math.round(contextValue.day3Temp)}<sup>o</sup></p>
                        <img src={contextValue.day3ConditionIcon} />
                        <p>{contextValue.day3ConditionText}</p>
                    </div>
                </div>
            </div>
        </>
    )
}