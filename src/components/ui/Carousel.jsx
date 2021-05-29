import React from 'react'

export const Carousel = ({imgs}) => {
  return (
    <>
      <div className="carousel-container">
        <div className="carousel-slide">
          {
            imgs.map((img, i)=>
                <img key={i} id={i} src={img.src} alt="" />
                
              )
          }
        </div>
      </div>
      

    </>
  )
}
