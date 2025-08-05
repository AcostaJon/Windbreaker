// context hook and client
import { useContext } from "react";
import { MyContext } from "../MyContext";
// css
import styles from './offCanvasMenu.module.css'


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
    // remove searched location
    const removeHandler = (e) => {
        contextapi.removeSearched(e)
    }

    return (
        <div className={styles.offCanvasMenu} id="offCanvasMenu">
            {/* header */}
            <div className={styles.offCanvasHeader} id="offCanvasHeader">
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
            {/* stored locations */}
            <ul>
                {/* list locations here */}
                {contextapi.searchedLocations.map(location => (
                    <li key={location.id} data-item-id={location.id}>
                        <div>
                            <p>{location.temp}</p>
                            <p>{location.region}</p>
                            <img src={location.icon} />
                        </div>
                        <button onClick={removeHandler}>X</button>
                    </li>

                ))}
            </ul>
        </div>
    )
}