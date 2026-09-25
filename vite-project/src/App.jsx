import './App.scss'
import Sect1 from "./components/Sect1/Sect1.jsx" 
import Sect2 from "./components/Sect2/Sect2.jsx" 
import Sect3 from "./components/Sect3/Sect3.jsx" 
import Sect4 from "./components/Sect4/Sect4.jsx" 
import Sect5 from "./components/Sect5/Sect5.jsx" 
import Sect6 from "./components/Sect6/Sect6.jsx" 
import Footer from "./components/Footer/Footer.jsx" 
function App() {
  return (
    <>
      <div className="bg">
        <Sect1/>
          <Sect2/>
            <Sect3/>
              <Sect4/>
                <Sect5/>
                  <Sect6/>
      </div>
                    <Footer/>
    </>
  )
}

export default App
