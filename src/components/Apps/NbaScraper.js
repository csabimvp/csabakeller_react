// Importing React components
import React, { useEffect, createRef } from 'react';

// Importing 3rd party components
import lottie from 'lottie-web';

// Importing animation
import WebScraperAnimation from '../animations/webscraper.json';

export default function NbaScraper() {

    let animationContainer = createRef()

    useEffect(() => {
        lottie.loadAnimation({
            container: animationContainer.current,
            animationData: WebScraperAnimation,
        })
    })

    return (
        <div className="row pt-5 mb-4">
            <div className="col">
                <div ref={animationContainer} className='animation-scraper animations'></div>
            </div>
            <div className="col budget-tracker-app">
                <h2 className="mt-4 pt-2 display-5 fw-bold"><strong>Web Scraping NBA Stats</strong></h2>
                <p className="mt-4 pt-2" style={{ textAlign: "justify" }}>As a big fan of basketball I’m checking NBA game and player stats on a day-to-day basis. My biggest issue is that I have to visit multiple sites for different information. It’s not a big deal but can be annoying. This project’s goal was to create a web scraper that scrapes multiple sites and data sources to develop one database, with all the information I need in one convenient place. By storing the daily game and box score stats in a database, I am able to query the database for a team to check and analyze it’s progress throughout the NBA season. With storing the data, I was also being conscious about not sending unnecessary requests for the same data to the source and limiting network traffic. The data is provided by a few REST API endpoints and the data storage is executed with a daily cron job on my linux cloud machine.</p>
                <ul className="list-group">
                    <li className="list-group-item backend-list"><strong>Backend:</strong> <span className="django-green">Django </span>+ <span className="django-red">Django REST framework</span>+ <span className="beautifulsoup">Beautiful Soup</span></li>
                    <li className="list-group-item budget-list">Web Crawling with Beautiful Soup requests, JSON database, Database querying with multiple API endpoints, scheduled cron jobs.</li>
                    <li className="list-group-item frontend-list"><strong>Frontend:</strong> <span className="react-blue"> React</span></li>
                    <li className="list-group-item budget-list">API consumption, clean and simple data display.</li>
                </ul>
                <div className='text-center pt-5 mb-4'>
                    <a className='checkitout' target="_blank" rel="noopener noreferrer" href="https://sad-neumann-a55e5b.netlify.app/"><i
                        className="fas fa-link"></i> Check it out!</a>
                </div>
            </div>
        </div>
    )

}