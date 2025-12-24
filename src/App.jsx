import Header from "./componants/header/header";
import Hero from "./componants/hero/hero";
import Main from "./componants/main/main";
import Contact from "./componants/contact/contact";
import Footer from "./componants/footer/footer";
import { useState } from "react";
import Techs from "./componants/tech/tech";
function App() {
  const [showScroll, setShowScroll] = useState(false)
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      setShowScroll(true)
    }
    else {
      setShowScroll(false)
    }
  });
  return (
    <div className="container" id="up">
      <Header/>
      <Hero />
      <div className="line"></div>
      <Techs/>
      <div className="line"></div>
      <Main />
      <div className="line"></div>
      <Contact />
      <div className="line"></div>
      <Footer />

        <a style={{transition:".8s", opacity: showScroll ? 1 : 0}} className="scroll2top" href="#up">
        <button className="icon-arrow-up"></button>
      </a>
    </div>
  )
}

export default App
