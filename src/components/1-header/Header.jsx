import { useEffect, useState } from "react";
import "./header.css";
export default function Header() {
  const [menu, setMenu] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light")
    }else {
      document.body.classList.remove("light");
      document.body.classList.add("dark")
    }
  
    
  }, [theme])
  
  return (
    <header className="flex">
      <button onClick={() => setMenu(true)} className="menu icon-menu flex">
        
      </button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Article</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#">Speking</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
      <button
      onClick={()=> {
        localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark")

        setTheme(localStorage.getItem("currentMode"))
      }}
      
      className="modeToggle flex">
        {theme === "dark" ? (<span className="icon-moon-o"></span>) : <span className="icon-sun"></span>}
      </button>

      {menu && (
        <div className=" fixed">
          <ul className="modal ">
            <li>
              <button className="icon-close" onClick={() => setMenu(false)} />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
