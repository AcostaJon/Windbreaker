export default function Forecast(params) {
    return (
        <>
            <div id="forecast">
                {/* cloud cover, wind direction, humidity */}
                <div id="coverDirecHumid">
                    {/* cloud cover */}
                    <div>
                        <img />
                        <p>20%</p>
                    </div>
                    {/* wind direction */}
                    <div>
                        <img />
                        <p>SSE</p>
                    </div>
                    {/* humidity */}
                    <div>
                        <img />
                        <p>15%</p>
                    </div>
                </div>
                {/* forecast */}
                <div id="forecastDays">
                    {/* forecast day 1 */}
                    <div>
                        <p>05-20</p>
                        <p>65<sup>o</sup></p>
                        <img />
                        <p>sunny</p>
                    </div>
                    {/* forecast day 2 */}
                    <div>
                        <p>05-21</p>
                        <p>60<sup>o</sup></p>
                        <img />
                        <p>partly cloudy</p>
                    </div>
                    {/* forecast day 3 */}
                    <div>
                        <p>05-22</p>
                        <p>58<sup>o</sup></p>
                        <img />
                        <p>rainy</p>
                    </div>
                </div>
            </div>
        </>
    )
}