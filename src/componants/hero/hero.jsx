import "./hero.css";

export default function Hero (){
    return(
        <section className="hero flex">
            <div className="left-sec">
                <div className="avatar-icon">
                    <img src="public/me-modified.png" alt="" />
                    <i className="icon-check-circle"></i>
                </div>
                <h1>frontend developer</h1> 
                <p>I have html, css, js languages & i have react and git</p>
                <div className="icons">
                    <i> <a href="https://www.facebook.com/profile.php?id=100009325844427&locale=ar_AR" target="blank" className="icon-facebook"></a></i>
                    <i> <a href="https://wa.me/+201507589706" target="blank" className="icon-whatsapp"></a></i>
                    <i> <a href="https://github.com/seifelkorashy?tab=repositories" target="blank" className="icon-github"></a></i>
                </div>
            </div>
            <div className="right-sec border">ssss</div>
        </section>
    )
}