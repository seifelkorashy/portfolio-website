import "./main.css";

export default function Main() {
    return(
         <main className="flex">
            <div className="left-sec">
                <button className="active">all projects</button>
                <button>html & css</button>
                <button>javascript</button>
            </div>


            <div className="right-sec ">
                <div className="card border">
                    <img width={255} src="public/me.jpg" alt=""/>
                    <div className="card-content">
                        <h3>Project Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    </div>
                    <button><a href="">go to project</a></button>
                    
                </div>
                <div className="card">
                    <img width={255} src="public/me.jpg" alt=""/>
                    <div className="card-content">
                        <h3>Project Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    </div>
                    <button><a href="">go to project</a></button>
                </div>
                <div className="card">
                    <img width={255} src="public/me.jpg" alt=""/>
                    <div className="card-content">
                        <h3>Project Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    </div>
                    <button><a href="">go to project</a></button>
                </div>
            </div>
        </main>
    )
}