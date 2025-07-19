import { useContext } from "react";
import { MyContext } from "../MyContext";


export default function Menu() {
    // context api
    const contextapi = useContext(MyContext)
    // hendle form submit
    const handleSubmit = (e) => {
        contextapi.offConvasFormSubmit(e);
    };
    // handle menu close
    const handleClose = (e) => {
        contextapi.offConvasMenuClose(e);
    }

    return (
        <div id="offCanvasMenu">
            {/* header */}
            <div id="offCanvasHeader">
                {/* logo */}
                <div>
                    <h1>WindBreaker</h1>
                    <img src="./wind.svg" />
                </div>
                {/* close */}
                <button onClick={handleClose}>X</button>
            </div>
            {/* input */}
            <form onSubmit={handleSubmit}>
                <input placeholder="city name or zipcode" />
                <button>Search</button>
            </form>
        </div>
    )
}