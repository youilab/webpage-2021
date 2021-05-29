import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";
import { Link } from "react-router-dom";
import { getProjectByName } from "../selectors/getProjectByName";
import { getSubProjectByName } from "../selectors/getSubProjectByName";
import { SubProjScreen } from "./SubProjScreen";
import {Carousel} from "./ui/Carousel";

export const ProjectScreen = ({ history }) => {
  
  const { project } = useParams();
  const [SubProjModal, setSubProjModal] = useState(false);
  const [subProject, setSubProject] = useState([]);
  const p = getProjectByName(project);

  const images = [900, 800, 700, 600, 500].map((size) => ({
    src: `https://placedog.net/${size}/${size}`
  }));
  console.log(images)

  useEffect(() => {
    document.title = `${p.title} | You-i Lab`
  }, [p])

  const handleClick = (subProjectName) => {
    setSubProjModal(!SubProjModal);
    const subProjectContent = getSubProjectByName(subProjectName);
    setSubProject(subProjectContent);
  };
  

  const { contentProject } = p;
  if (!p || !p.contentProject) {
    return <Redirect to="/projects" />;
  }

  


  return (
    <div className="project__container">
       <Link className="modal__back" to="/projects">BACK</Link>
      <h1 className="nav-shift">{p.title}</h1>
      <div className="project__info-container">
        {contentProject.map((content, i) =>
            
         { return <div key={i} className={p.title === "UrBis" ?  "project__info-cards" : "project__info-section"}>
             {
             content.map((type, index) => {
            switch (type.type) {
              case "text":
                return <div key={index} className={p.title === "CDS" ?  null : "project__info-content"}>
                    <p>{type.text}</p>
                </div> 
              case "image":
                return <div key={index}  className="project__info-content"><img src={type.url} alt="" /> </div>;
              case "button":
                return (
                  <a href={type.url} className={`${type.class} btn`}>
                    {type.text}{" "}
                  </a>
                );
              case "video":
                return (
                    <div key={index} className="project__info-content">
                  <iframe
                    src={type.url}
                    title={p.title}
                    frameborder="0"
                  ></iframe>
                  </div>
                );
              case "iframe":
                return (
                    <div key={index} className="project__info-content">
                  <iframe
                    src={type.url}
                    title={p.title}
                    frameborder="0"
                  ></iframe>
                  </div>
                );
                case "container":
                return (
                  <div key={index} className="projects__card-container">
                    
                      <div
                        style={{
                          background: `url(${type.image})`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                        }}
                        className="projects__card-image"
                      ></div>

                    <div className="projects__card-info">
                      <h2>{type.title}</h2>
                      <p>{type.text}</p>

                      <div className="projects__card-button">
                        {type.textBtn === "Read More" ? (
                          <button
                            onClick={() => handleClick(type.title)}
                            className="btn"
                          >
                            {type.textBtn}
                          </button>
                        ) : (
                          <a href={type.url} className="btn">
                            {" "}
                            {type.textBtn && type.textBtn}{" "}
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                );
                case "gallery":
                  const items = type.images.map(img => 
                   ( {
                      src: img,
                      altText: img,
                      caption: img
                    })
                  )
                return (
                  <Carousel imgs={items} />
                  
                );
                default:
                    return <h1>Error</h1>
            }
          })}
         </div>
          }

          
        )}
      </div>

      {SubProjModal && (
        <SubProjScreen subProject={subProject} SubProjModal={setSubProjModal} />
      )}
    </div>
  );
};
