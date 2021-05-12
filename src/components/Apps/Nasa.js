// Importing React components
import React, { useEffect, createRef } from 'react';

// Importing 3rd party components
import lottie from 'lottie-web';

// Importing animation
import Galaxy from '../animations/galaxy.json';

export default function Nasa() {

    let animationContainer = createRef()

    useEffect(() => {
        lottie.loadAnimation({
            container: animationContainer.current,
            animationData: Galaxy,
        })
    })

    return (
        <div className="row pt-5 mb-4">
            <div className="col">
                <div ref={animationContainer} className='animation-budget animations'>

                </div>
            </div>
            <div className="col budget-tracker-app">
                <h2 className="mt-4 pt-2 display-5 fw-bold"><strong>Astronomy Picture of the Day</strong></h2>
                <p className="mt-4 pt-2" style={{ textAlign: "justify" }}>Astronomy Picture of the Day (APOD) is an API provided by NASA and Michigan Technological University (MTU). Each day a different image or photograph of our universe is featured, along with a brief explanation written by a professional astronomer. This was my very first React project and my first interaction, fetching an API. I’m a big NASA fan so this was a welcoming added bonus.</p>
                <ul className="list-group">
                    <li className="list-group-item frontend-list"><strong>Frontend:</strong> <span className="react-blue"> React</span></li>
                    <li className="list-group-item budget-list">NASA - APOD API consumption.</li>
                </ul>
            </div>
        </div>
    )

}