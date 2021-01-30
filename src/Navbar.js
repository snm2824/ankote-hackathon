import React from "react";

import "./Navbar.css";

export default function Navbar(){
    return(
        <div className={"navbar"}>

            <ul>
                {/*1*/}
                <li>
                    <a>Ankor</a>
                </li>
                {/*2*/}
                <li>
                    <a>Notes</a>
                </li>
                {/*3*/}
                <li>
                    <a>Home</a>
                </li>
                {/*4*/}
                <li>
                    <a>Setting</a>
                </li>
            </ul>
        </div>
    )
}
