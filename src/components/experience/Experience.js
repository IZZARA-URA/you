import React from "react";
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id="experience">
            <div className="what_i_know">
                <h5>What Skills I Have</h5>
                <h2>My Experience</h2>
            </div>
            <div className="container experience__container">
                <div className="experience__nlp">
                    <h3>Nutural Langues Processing & Signal Processing</h3>
                    <div className="experience__content_nlp">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Wav2Vec2 Model</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>HuBERT Model</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Whisper Model</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Seq2Seq with Transformer Model</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>CycleGAN VC 1, 2 Model</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience__vision">
                    <h3>Image Processing & Computer Vision</h3>
                    <div className="experience__content_cov">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Basic CNN Model</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Basic GAN Model</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>RestNet Model</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Yolo Version 3, 5, 7</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Object Detection With Transformer</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience__dev">
                    <h3>Fullstack Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>NodeJS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>R</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Go</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>MySQL</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>

                    </div>
                </div>

                <div className="experience__others">
                    <h3>Hight Performance Computer (HPC) & Cloud Computing Skills</h3>
                    <div className="experience__content_others">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>HPC: LANTA & TARA </h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>AWS Cloud</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Experience