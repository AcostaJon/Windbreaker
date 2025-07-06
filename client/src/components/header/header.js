import { useContext } from "react";
import { MyContext } from "../MyContext"

export default function Header(params) {
    const contextValue = useContext(MyContext);

     // offcanvas button handler
    const buttonHandler = (e) => {
        contextValue.offConvasMenuButton(e)
    }

    return (
        <>
            <header id="header">
            {/* offcanvas button  */}
                <div>
                    <button onClick={buttonHandler}>button</button>
                </div>
                <div id="logo">
                    <h1>Windbreaker</h1>
                </div>
            </header>
        </>
    )
}