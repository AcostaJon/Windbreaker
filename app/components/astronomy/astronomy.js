'use client'
export default function Astronomy(props) {

    if (props.astronomy) {
        return (
            <>
                <div className="row container-fluid text-white py-4 py-md-0 py-md-1 justify-content-around align-items-center text-center rounded shadow-lg" id="Astronomy">
                    {/* sunrise */}
                    <div className="col-4  px-0">
                        <img src="/sun-regular.svg" className="astroIcon"/>
                        <p className="my-2 fontSizeMd">Sunrise</p>
                        <p className="mb-0 text-secondary fontSizeMd">{props.astronomy.astronomy.astronomy.astro.sunrise}</p>
                    </div>
                    {/* sunset */}
                    <div className="col-4 px-0">
                        <img src="/sun-solid.svg" className="astroIcon"/>
                        <p className="my-2 fontSizeMd">Sunset</p>
                        <p className="mb-0  text-secondary fontSizeMd">{props.astronomy.astronomy.astronomy.astro.sunset}</p>
                    </div>
                    {/* moonphase */}
                    <div className="col-4 px-0" >
                        <img src="/moon-solid.svg" className="astroIcon"/>
                        <p className="my-2 fontSizeMd">MoonPhase</p>
                        <p className="mb-0 fontSize13 text-secondary fontSizeMd">{props.astronomy.astronomy.astronomy.astro.moon_phase}</p>
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
