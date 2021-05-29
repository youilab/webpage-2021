import React from 'react'
import error from '../assets/ui/blog-construction.png'

export const Error404 = () => {
    return (
        <div className="error__container">
            <img src={error} alt="" className="nav-shift" />
            <h3>This page is under construction</h3>
        </div>
    )
}
