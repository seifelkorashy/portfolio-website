import "./main.css";
import { useEffect, useState } from "react";
export default function Main() {
    useEffect(() => {
        let btns = document.querySelectorAll(".left-sec button");
        btns.forEach(btn => {
            btn.addEventListener("click", () => {
                btns.forEach(btn => {
                    btn.classList.remove("active");
                })
                btn.classList.add("active");
            })
        })
    } , [])

    let projects = [
        {id: 1, title: "quiz app", img: "/imgs/p1.png", subTitle: "this is a quiz app, you can test your knowledge", category: "javascript", link: "https://quizapp2006.netlify.app/"},
        {id: 2, title: "guess word game", img: "/imgs/p2.png", subTitle: "this is a guess word game, Word Search Adventure", category: "javascript", link: "https://guesswordgame2006.netlify.app/"},
        {id: 3, title: "image editor", img: "/imgs/p3.png", subTitle: "this image editor, Image Manipulation Tool", category: "javascript", link: "https://imageeditor2006.netlify.app/"},
        {id: 4, title: "crud app", img: "/imgs/p4.png", subTitle: "this crud app, Data Management System", category: "javascript", link: "https://crud2006.netlify.app/"},
        {id: 5, title: "notes app", img: "/imgs/p5.png", subTitle: "this notes app, Note-Taking App", category: "javascript", link: "https://notes-app2006.netlify.app/"},
        {id: 6, title: "todo list", img: "/imgs/p6.png", subTitle: "this todo list, Daily Planner", category: "javascript", link: "https://todo-list2006.netlify.app/"},
        {id: 7, title: "typing speed test game", img: "/imgs/p7.png", subTitle: "this typing speed test game, Improve Your Typing Speed", category: "javascript", link: "https://typingspeedtestgame1.netlify.app/"},
        {id: 8, title: "x o game", img: "/imgs/p8.png", subTitle: "this this Tic-Tac-Toe Game , Multiplayer Tic-Tac-Toe", category: "javascript", link: "https://xopaly.netlify.app/"},
        {id: 9, title: "dashboard", img: "/imgs/p9.png", subTitle: "this dashboard", category: "css", link: "https://elkorashy-dashboard.netlify.app"},
        {id: 10, title: "prayer app", img: "/imgs/p11.png", subTitle: "this prayer app, Prayer Times App", category: "react", link: "https://prayer2006.netlify.app"},
    ]
    const [arr, setArr] = useState(projects);

    let allProjects = arr.map(project => {
        return(
            <div className="card" key={project.id}>
                <img width={400} src={project.img} alt=""/>
                <div className="card-content">
                    <h3>{project.title}</h3>
                    <p>{project.subTitle}</p>
                </div>
                <button><a href={project.link} target="blank">go to project</a></button>
            </div>
        )
    })

    return(
        <main className="flex">
            <div className="left-sec">
                <button className="active"
                onClick={() => {
                    setArr(projects)
                }}
                >all projects</button>
                <button onClick={() => {
                    setArr(projects.filter((project) => project.category === "css"))
                }}>html & css</button>
                <button
                onClick={() => {
                    setArr(projects.filter((project) => project.category === "javascript"))
                }}
                >javascript</button>
                <button
                onClick={() => {
                    setArr(projects.filter((project) => project.category === "react"))
                }}
                >react</button>
            </div>


            <div className="right-sec">
                {allProjects}
            </div>
        </main>
    )
}