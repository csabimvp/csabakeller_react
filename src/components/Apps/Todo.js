// Importing React components
import React, { useEffect, createRef } from 'react';

// Importing 3rd party components
import lottie from 'lottie-web';

// Importing animation
import TodoAnimation from '../animations/groceries.json';

export default function Todo() {

    let animationContainer = createRef()

    useEffect(() => {
        lottie.loadAnimation({
            container: animationContainer.current,
            animationData: TodoAnimation,
        })
    })

    return (
        <div className="row pt-5 mb-4">
            <div className="col budget-tracker-app">
                <h2 className="mt-4 pt-2 display-5 fw-bold"><strong>ToDo / Grocery Tracker</strong></h2>
                <p className="mt-4 pt-2" style={{ textAlign: "justify" }}>This was my first go on Django & React together because every tutorial for this stack is the Todo App. Of course I wanted to take my own spin on it, so it turned out to be a shopping list / todo tracker. Worked out really well for us, very convenient and fit for purpose. Accessible anytime from any device, you just need an internet connection.</p>
                <ul className="list-group">
                    <li className="list-group-item backend-list"><strong>Backend:</strong> <span className="django-green">Django </span>+ <span className="django-red">Django REST framework</span></li>
                    <li className="list-group-item budget-list">API Login via token, SQL database, Database querying with multiple API endpoints.</li>
                    <li className="list-group-item frontend-list"><strong>Frontend:</strong> <span className="react-blue"> React</span></li>
                    <li className="list-group-item budget-list">User management, Login credentials, API interaction, CRUD functionality.</li>
                </ul>
            </div>
            <div className="col">
                <div ref={animationContainer} className='animation-budget animations'>

                </div>
            </div>
        </div>
    )

}