import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";

import { AnimatePresence, motion } from "framer-motion";

export default function Main() {
  const [active, setActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleFilterCard = (category) => {
    setActive(category);

    const newArr = myProjects.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === category;
      });

      return ZZZ === category;
    });

    setArr(newArr);
  };

  return (
    <main className="flex" >
      <div className="left-section flex ">
        <button
          onClick={() => {
            setActive("all");
            setArr(myProjects);
          }}
          className={active == "all" ? "active" : ""}
        >
          All Project
        </button>

        <button
          onClick={() => {
            handleFilterCard("css");
          }}
          className={active == "css" ? "active" : ""}
        >
          HTML & CSS & Bootstrap
        </button>

        <button
          onClick={() => {
            handleFilterCard("javascript");
          }}
          className={active == "javascript" ? "active" : ""}
        >
          Javascript & TypeScript
        </button>
        <button
          onClick={() => {
            handleFilterCard("react");
          }}
          className={active == "react" ? "active" : ""}
        >
          Reactjs & Nextjs
        </button>

        <button
          onClick={() => {
            handleFilterCard("tailwind");
          }}
          className={active == "tailwind" ? "active" : ""}
        >
          Nextjs & TailwindCSS
        </button>
      </div>

      <div className="flex right-section ">
        <AnimatePresence>
          {arr.map((item, index) => (
            <motion.div
              key={index}
              className="card "
              layout
              initial={{ transform: "scale(0.4)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
            >
              <a href={item.path}>
                <img width={266} src={item.imgPath} alt="" />
              </a>
              <div style={{ width: "266px" }} className="box ">
                <h2 className="title">{item?.title}</h2>
                <p className="subtitle">
                  {item.desc.split(" ").splice(0, 10).join(" ")}....
                </p>
                <div className="flex icons">
                  <div style={{ gap: "10px" }} className="flex">
                    <a href={item.path} target="_blank" rel="noreferrer">
                      <div className="icon-link"></div>
                    </a>
                    <a href={item.git} target="_blank" rel="noreferrer">
                      <div className="icon-github" />
                    </a>
                  </div>

                  <a href={item.more} target="_blank" className="link flex" rel="noreferrer">
                    More
                    <span className="icon-arrow-right"></span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </main>
  );
}
