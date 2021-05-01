import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
	return (
        <div className="row">
            <div className="col-12 text-center my-2">
            	<h4>V 1.0.0</h4>
            	<Link to="/">Go back</Link>
            </div>
        </div>
	)
}

export default About