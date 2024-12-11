'use client'
import { useState } from "react";

// component
const SearchedLocation = (props) => {

    // remove searched city
    const removeHandler = (e) => {
        e.target.parentElement.style.display = "none"
    }

    return (
        <div className="row justify-content-between mb-3">
            <div className="col-9 d-flex py-2 align-items-center justify-content-center border border-white rounded">
                <p className="mb-0 me-1">{props.item.name},</p>
                <p className="mb-0 me-auto">{props.item.region}</p>
                <p className="mb-0 ">{Math.round(props.item.temp)}&deg;</p>
            </div>
            <button className="col-2 bg-danger border border-0 rounded" onClick={removeHandler} type="button">X</button>
        </div>
    )
}

export default function OffCanvasMenu(props) {
    // store searched citys
    const [items, setItems] = useState([]);

    // search city hanlder
    const search = (e) => {
        // offcanvas element
        const offCanvasMenu = document.getElementById('offcanvasNavbar')
        // offcanvas backdrop
        const offCanvasBackdrop = document.querySelector('.offcanvas-backdrop');
        // connection to parent component
        props.search(e)
        // update state
        setItems([...items, props.searchedLocation]);
        // reset input
        e.target[0].value = ''
        // close menu and backdrop
        offCanvasMenu.classList.remove("show");
        offCanvasBackdrop.classList.remove("show");
    }

    return (
        <>
            <div id="OffCanvasMenu">
                <nav className="navbar bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">WindBreaker <img src="/wind-solid-white.svg" width={23} /></h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body ">
                                <form className="d-flex mb-3" role="search" onSubmit={search}>
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                                <ul className="navbar-nav justify-content-end flex-grow-1 px-2">
                                    {/* {show saved cities} */}
                                    {items.map((item, index) => (
                                        <li key={index}><SearchedLocation item={item} /></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
