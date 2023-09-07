import React from "react";
import './Portfolio.css'
import data from './data_folio'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <div className="my_recent_work">
                <h5>My Recent Work</h5>
                <h2>Portfolio</h2>
            </div>
            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__cta">
                                    <a href={github} className="btn" target="_blank">Github</a>
                                    <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
                

            </div>
        </section>
    )
}

export default Portfolio