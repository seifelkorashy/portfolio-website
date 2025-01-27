import Header from "./componants/header/header";
import Hero from "./componants/hero/hero";
import Main from "./componants/main/main";
import Contact from "./componants/contact/contact";
import Footer from "./componants/footer/footer";
function App() {

  return (
    <div className="container">
      <Header/>
      <Hero />
      <div className="line"></div>
      <Main />
      <div className="line"></div>
      <Contact />
      <div className="line"></div>
      <Footer />
    </div>
  )
}

export default App
