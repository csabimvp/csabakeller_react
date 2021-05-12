// Importing React components
import React, { useEffect, createRef } from 'react';

// Importing 3rd party components
import lottie from 'lottie-web';

// Importing animation
import BudgetAnimation from '../animations/PiggyBank.json'

export default function Budget() {

    let animationContainer = createRef()

    useEffect(() => {
        lottie.loadAnimation({
            container: animationContainer.current,
            animationData: BudgetAnimation,
        })
    })

    return (
        <div className="row pt-5 mb-4">
            <div className="col">
                <div ref={animationContainer} className='animation-budget animations'>

                </div>
            </div>
            <div className="col budget-tracker-app">
                <h2 className="mt-4 pt-2 display-5 fw-bold"><strong>Budget Tracker App</strong></h2>
                <p className="mt-4 pt-2" style={{ textAlign: "justify" }}>I've been tracking my expenses for years now and I always used google sheets as my main tracking tool. Although that was and still is a perfectly viable option, I wanted to create something from scratch, on my own, which I can fine tune and customize the way I want, for my own requirements. My goal was to have the same analytical freedom like in a spreadsheet, but keep my data structured, in a proper database fashion. With this app, I can submit my expenses, create customisable categories and see how much I’m spending on certain things and categories, monthly or annually.</p>
                <ul className="list-group">
                    <li className="list-group-item backend-list"><strong>Backend:</strong> <span className="django-green">Django </span>+ <span className="django-red">Django REST framework</span></li>
                    <li className="list-group-item budget-list">API Login via token, SQL database, Database querying with multiple API endpoints, Monthly and Annual dashboards.</li>
                    <li className="list-group-item frontend-list"><strong>Frontend:</strong> <span className="react-blue"> React</span></li>
                    <li className="list-group-item budget-list">User management, Login credentials, API interaction, React Router for multiple pages, Dashboards.</li>
                </ul>
            </div>
        </div>
    )

}