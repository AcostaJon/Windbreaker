// context hook and client
import { useContext } from "react"
import { MyContext } from "../MyContext"
// css
import styles from './forecast.module.css'

export default function Forecast() {

    // context api
    const contextValue = useContext(MyContext);

    return (
        <>
            <div className={styles.forecast} id="forecast">
                {/* cloud cover, wind direction, humidity */}
                <div className={styles.coverDirectHumid}>
                    {/* cloud cover */}
                    <div>
                        <svg className={styles.forecastImg} id="cloudCoverImg" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M294.2 1.2c5.1 2.1 8.7 6.7 9.6 12.1l14.1 84.7 84.7 14.1c5.4 .9 10 4.5 12.1 9.6s1.5 10.9-1.6 15.4l-38.5 55c-2.2-.1-4.4-.2-6.7-.2c-23.3 0-45.1 6.2-64 17.1l0-1.1c0-53-43-96-96-96s-96 43-96 96s43 96 96 96c8.1 0 15.9-1 23.4-2.9c-36.6 18.1-63.3 53.1-69.8 94.9l-24.4 17c-4.5 3.2-10.3 3.8-15.4 1.6s-8.7-6.7-9.6-12.1L98.1 317.9 13.4 303.8c-5.4-.9-10-4.5-12.1-9.6s-1.5-10.9 1.6-15.4L52.5 208 2.9 137.2c-3.2-4.5-3.8-10.3-1.6-15.4s6.7-8.7 12.1-9.6L98.1 98.1l14.1-84.7c.9-5.4 4.5-10 9.6-12.1s10.9-1.5 15.4 1.6L208 52.5 278.8 2.9c4.5-3.2 10.3-3.8 15.4-1.6zM144 208a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM639.9 431.9c0 44.2-35.8 80-80 80l-271.9 0c-53 0-96-43-96-96c0-47.6 34.6-87 80-94.6l0-1.3c0-53 43-96 96-96c34.9 0 65.4 18.6 82.2 46.4c13-9.1 28.8-14.4 45.8-14.4c44.2 0 80 35.8 80 80c0 5.9-.6 11.7-1.9 17.2c37.4 6.7 65.8 39.4 65.8 78.7z" /></svg>
                        <p>Cloud Cover</p>
                        <p>{contextValue.cloudCover}%</p>
                    </div>
                    {/* wind direction */}
                    <div>
                        <svg  className={styles.forecastImg} id="windDirectionImg" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" /></svg>
                        <p>Wind Direction</p>
                        <p>{contextValue.windDirection}</p>
                    </div>
                    {/* humidity */}
                    <div>
                        <svg  className={styles.forecastImg} id="humidityImg" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0l1.8 0c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z" /></svg>
                        <p>Humidity</p>
                        <p>{contextValue.humidity}%</p>
                    </div>
                </div>
                {/* forecast */}
                <div className={styles.forecastDays} >
                    {/* forecast day 1 */}
                    <div>
                        <p>{contextValue.day1Date.slice(5, 10)}</p>
                        <p>{Math.round(contextValue.day1Temp)}<sup>o</sup></p>
                        <img src={contextValue.day1ConditionIcon} />
                        <p>{contextValue.day1ConditionText}</p>
                    </div>
                    {/* forecast day 2 */}
                    <div>
                        <p>{contextValue.day2Date.slice(5, 10)}</p>
                        <p>{Math.round(contextValue.day2Temp)}<sup>o</sup></p>
                        <img src={contextValue.day2ConditionIcon} />
                        <p>{contextValue.day2ConditionText}</p>
                    </div>
                    {/* forecast day 3 */}
                    <div>
                        <p>{contextValue.day3Date.slice(5, 10)}</p>
                        <p>{Math.round(contextValue.day3Temp)}<sup>o</sup></p>
                        <img src={contextValue.day3ConditionIcon} />
                        <p>{contextValue.day3ConditionText}</p>
                    </div>
                </div>
            </div>
        </>
    )
}