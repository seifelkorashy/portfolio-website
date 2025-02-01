import "./header.css";
import { useState,useEffect } from "react";

export default function Header() {
    const [showModel , setShowModel] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        }else {
            document.body.classList.add("light");
            document.body.classList.remove("dark");
        }
    }, [theme]);
    return (
        <header className="flex">
            <img src="/me-modified.png" alt="" style={{width:"45px"}} />
            <button  className="show-model icon-menu" onClick={() => {setShowModel(true)}}></button>
            <nav>
                <ul className="flex">
                    <li><a href="">about</a></li>
                    <li><a href="">articals</a></li>
                    <li><a href="">projects</a></li>
                    <li><a href="">contact</a></li>
                </ul>
            </nav>

            <button style={{all:"unset"}} onClick=
            {() => {
                localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
                setTheme(localStorage.getItem("theme"));
            }
            }
            >
                <span className={theme === "light" ? "icon-moon-o moon" : "icon-sun sun"}></span>
            </button>


        {showModel && (
                <div className="fixed">
                <ul className="model">
                <li style={{textAlign:"right", border:"none"}}><button onClick={() => {setShowModel(false)} } className="close icon-close"></button></li>
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