// import usecontext hook
import { useContext } from "react"
// import context client
import { MyContext } from "../MyContext"

export default function Astro(params) {
    // context api
    const contextValue = useContext(MyContext);
    return (
        <>
            <div id="astro">
                {/* sunrise */}
                <div>
                    <img />
                    <p>Sunrise</p>
                    <p>{contextValue.sunrise}</p>
                </div>
                {/* sunset */}
                <div>
                    <img />
                    <p>Sunset</p>
                    <p>{contextValue.sunset}</p>
                </div>
                {/* MoonPhase */}
                <div>
                    <img />
                    <p>MoonPhase</p>
                    <p>{contextValue.moonPhase}</p>
                </div>
            </div>
        </>
    )
}