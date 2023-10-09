import React from "react";
import './Educations.css'

import {LuGraduationCap} from 'react-icons/lu'
import {MdOutlineSchool} from 'react-icons/md'

const Educations = () => {
    return (
        <section id="educations">
            <div className="my_educations">
                <h5></h5>
                <h2>My Educations</h2>
            </div>

            <div className="container educations__container">
                {/* LEFT */}
                <div className="education__content__left">
                    <div className="child">
                        <MdOutlineSchool size={200}/>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="education__content__right">
                    <div className="education__content">
                        <h3> High School Level</h3>
                        <div className="education__detail">
                            <h4>Pomnakarach Sawthayanon High School, Samuthprakarn, Thailand</h4>
                            <h5>Science and Mathermatic</h5>
                            <h5>GPAX : 3.00</h5>
                            <small className="text-light">2012 - 2017</small>
                        </div>
                    </div>

                    <div className="education__content">
                        <h3> Bachelor Degree</h3>
                        <div className="education__detail">
                            <h4>King Mongkut's University of Technology Thonburi, Bankok, Thailand</h4>
                            <h5>Electronics and Telecommunications Engineering</h5>
                            <h5>GPAX : 2.75</h5>
                            <small className="text-light">2017 - 2021</small>
                        </div>
                    </div>

                    <div className="education__content">
                        <h3> Master Degree</h3>
                        <div className="education__detail">
                            <h4>King Mongkut's University of Technology Thonburi, Bankok, Thailand</h4>
                            <h5>Electronics Engineering</h5>
                            <h5>GPA : 3.86</h5>
                            <small className="text-light">2021 - Present</small>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Educations