import "./main.css";
import { useEffect, useState } from "react";
import { projects } from "../../projects.js";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
export default function Main() {
  useEffect(() => {
    let btns = document.querySelectorAll(".left-sec button");
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        btns.forEach((btn) => {
          btn.classList.remove("active");
        });
        btn.classList.add("active");
      });
    });
  }, []);

  const [arr, setArr] = useState(projects);

  let allProjects = arr.map((project) => {
    return (
      <Card sx={{ maxWidth: 345 }} component={"a"} href={project.link} key={project.id} target="_blank" className="card">
        <CardMedia sx={{ height: 200 }} image={project.img} />
        <CardContent>
          <Typography  variant="h5" component="h1">
            {project.title}
          </Typography>
          <Typography variant="body2" component={"p"}>
            {project.subTitle}
          </Typography>
        </CardContent>
      </Card>
    );
  });

  return (
    <main className="flex">
      <div className="left-sec">
        <button
          className="active"
          onClick={() => {
            setArr(projects);
          }}
        >
          all projects
        </button>
        <button
          onClick={() => {
            setArr(projects.filter((project) => project.category === "css"));
          }}
        >
          html & css
        </button>
        <button
          onClick={() => {
            setArr(
              projects.filter((project) => project.category === "javascript")
            );
          }}
        >
          javascript
        </button>
        <button
          onClick={() => {
            setArr(projects.filter((project) => project.category === "react"));
          }}
        >
          react + MUI
        </button>
      </div>

      <div className="right-sec">{allProjects}</div>
    </main>
  );
}
