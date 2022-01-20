// Importing React components
import React, { useEffect, createRef } from 'react';

// Importing 3rd party components
import lottie from 'lottie-web';

// Importing animation
import WeatherAnimation from '../animations/csabakeller.json';

export default function WeatherApp() {

    let animationContainer = createRef()

    useEffect(() => {
        lottie.loadAnimation({
            container: animationContainer.current,
            animationData: WeatherAnimation,
        })
    })

    return (
        <div className="row pt-5 mb-4">
            <div className="col budget-tracker-app">
                <h2 className="mt-4 pt-2 display-5 fw-bold"><strong>Weather App with Lottie Animations</strong></h2>
                <p className="mt-4 pt-2" style={{ textAlign: "justify" }}>This is a simple openweather API fetch call with React.js but with two twists:</p>
                <p style={{ textAlign: "justify" }}>1. Conditionally render weather animations based on the weather data.</p>
                <p style={{ textAlign: "justify" }}>2. Conditional styles based on sunset and sunrise data.</p>
                <ul className="list-group">
                    <li className="list-group-item frontend-list"><strong>Frontend:</strong> <span className="react-blue"> React</span></li>
                    <li className="list-group-item budget-list">API consumption, Lottie animations, conditional styles and render</li>
                </ul>
                <div className='text-center pt-5 mb-4'>
                    <a className='checkitout' target="_blank" rel="noopener noreferrer" href="https://shabsandbirdie.com/weather/"><i
                        className="fas fa-link"></i> Check it out!</a>
                </div>
            </div>
            <div className="col">
                <div ref={animationContainer} className='animation-weather animations'>

                </div>
            </div>
        </div>
    )

}