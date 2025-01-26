import Header from "./componants/header/header";
import Hero from "./componants/hero/hero";
import Main from "./componants/main/main";
function App() {

  return (
    <div className="container">
      <Header/>
      <Hero />
      <div className="line"></div>
      <Main />
    </div>
  )
}

export default App
