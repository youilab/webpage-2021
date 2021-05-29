import React, { useEffect } from 'react'
import {publications} from '../data/publications'


export const Publications = () => {

    useEffect(() => {
        document.title = 'Publications | You-i Lab'
      }, [])

    return (
        <div className="publications__container">
            <div className="publications__title">
                <h1>Publications</h1>
                <h2>These are our projects that we have created in You-i Lab throughout our history</h2>
            </div>

            <div className="nav-shift publications__cards-container">
                {
                    publications.map((publication, i)=> (
                        <div key={i} className="publications__card">
                            <h3>{publication.title?.toUpperCase() || publication.proceedingTitle?.toUpperCase()}</h3>
                            <p>{`${!publication.authors? '' : publication.authors + ', '} 
                            ${!publication.journal? '' : publication.journal + ', '} 
                            ${!publication.book? '' : publication.book + ', '} 
                            ${!publication.city? '' : publication.city + ', '} 
                            ${!publication.editor? '' : publication.editor + ', '} 
                            ${!publication.publisher? '' : publication.publisher + ', '} 
                            ${!publication.year? '' :publication.year+ ', '}
                            ${!publication.volume? '' :publication.volume + ', '} 
                            ${!publication.pages? '' :publication.pages + ', '}
                            ${!publication.doi? '' :publication.doi + ', '} `}</p>

                            {publication.url? <a className="btn" href={publication.url}>Open</a>: null}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
