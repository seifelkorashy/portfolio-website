import "./header.css";
import { useState } from "react";

export default function Header() {
    const [showModel , setShowModel] = useState(false)
    return (
        <header className="flex">
            <img src="public/me-modified.png" alt="" style={{width:"45px"}} />
            <button  className="show-model icon-menu" onClick={() => {setShowModel(true)}}></button>
            <nav>
                <ul className="flex">
                    <li><a href="">about</a></li>
                    <li><a href="">articals</a></li>
                    <li><a href="">projects</a></li>
                    <li><a href="">contact</a></li>
                </ul>
            </nav>

            <button style={{all:"unset"}}>
                <span className="icon-moon-o moon"></span>
            </button>
        {showModel && (
                <div className="fixed">
                <ul className="model">
                <li style={{textAlign:"right", border:"none"}}><button style={{backgroundColor:"black"}} onClick={() => {setShowModel(false)} } className="close icon-close"></button></li>
                    <li><a href="">about</a></li>
                    <li><a href="">articals</a></li>
                    <li><a href="">projects</a></li>
                    <li><a href="">contact</a></li>
                </ul>
            </div>
        )}
        </header>
    )
}