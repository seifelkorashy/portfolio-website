import Header from "./componants/header/header";
import Hero from "./componants/hero/hero";
import Main from "./componants/main/main";
import Contact from "./componants/contact/contact";
function App() {

  return (
    <div className="container">
      <Header/>
      <Hero />
      <div className="line"></div>
      <Main />
      <div className="line"></div>
      <Contact />
    </div>
  )
}

export default App
