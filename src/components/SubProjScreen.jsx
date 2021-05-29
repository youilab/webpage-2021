import React from "react";
import {Carousel} from "./ui/Carousel";


export const SubProjScreen = ({ subProject, SubProjModal }) => {

  return (
    <div className="modal__container">
      <div className="modal__back">
        <p onClick={() => SubProjModal(false)}>BACK</p>
      </div>
      <div className="modal__name-container">
        <h2>{subProject.title.toUpperCase()}</h2>
      </div>
      {
    subProject.contentProject.map((content, index) => {
            return content.map(type=>
                {
                    console.log(type)
                    switch (type.type) {
                    case 'text':
                        return <p>{type.text}</p>
                    case 'image':
                        return <img src={type.url} alt="" />
                    case 'button':
                        return <a href={type.url} className={`${type.class} btn` } >{type.text} </a>
                    case 'video':
                        return <iframe src={type.url} title={type.title} frameborder="0"></iframe>
                    case 'iframe':
                        return <iframe src={type.url} title={type.title} frameborder="0"></iframe>
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
                        return null
                }
            })
                  })
    }
    </div>
  );
};
