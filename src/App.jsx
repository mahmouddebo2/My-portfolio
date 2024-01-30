import { useEffect, useState } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowarrow(true);
      } else {
        setShowarrow(false);
      }
    });
  }, []);

const [showarrow ,setShowarrow] = useState(false);

  return (
    <>
      <div id="up" className="container">
        <Header />
        <Hero />
        <div className="divider" id="project"/>
        <Main  />
        <div className="divider" />

        <Contact />
        <div className="divider" id="contact"/>

        <Footer />
     
         <a href="#up" style={{opacity: showarrow? 1 : 0 , transition: "1s"}}>
         <button  className="icon-keyboard_arrow_up scrollTop"/>
         </a>
      
      </div>
    </>
  );
}

export default App;
