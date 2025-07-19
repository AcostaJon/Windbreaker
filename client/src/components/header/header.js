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
                    <svg onClick={buttonHandler} width={25} height={25} fill="#D2D0A0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>
                </div>
                <div id="logo">
                    <h1>Windbreaker</h1>
                </div>
            </header>
        </>
    )
}