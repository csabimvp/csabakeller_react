// Importing React components
import React, { useEffect, createRef } from 'react';

// Importing 3rd party components
import lottie from 'lottie-web';
import Typewriter from 'typewriter-effect';

// Importing animation
import Avatar from '../animations/Avatar.json';
// import WriteOn from '../animations/WriteOn.json';

// Import components
import Budget from '../Apps/Budget';
import Todo from '../Apps/Todo';
import Nasa from '../Apps/Nasa';
import NbaScraper from '../Apps/NbaScraper';
import WeatherApp from '../Apps/WeatherApp';

export default function Home() {
    let avatarContainer = createRef()
    // let writeOnContainer = createRef()

    useEffect(() => {
        lottie.loadAnimation({
            container: avatarContainer.current,
            animationData: Avatar,
        })
    })

    return (
        <>
            <div className='container pt-5 mb-4'>
                <div className='row'>
                    <div className='col'>
                        <div className='animation-avatar animations' ref={avatarContainer}>

                        </div>
                    </div>
                    <div className='col intro'>
                        <h1 className="display-5 fw-bold">I am Csaba Keller</h1>
                        <Typewriter
                            options={{
                                strings: ["Senior Data Analyst @ BP Plc", "Full Stack Developer", "Lottie Animator"],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 25,
                            }}
                        />
                        <div className="col-12 socials">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/kellercsabii/"><i
                                className="fab fa-facebook"></i></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/kellercsabii/"><i
                                className="fab fa-instagram"></i></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/csaba-keller-57600a126/"><i
                                className="fab fa-linkedin"></i></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/csabimvp"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="divider mb-4 text-center"></div>

            <div className='projects'>
                <h1>My Projects:</h1>
            </div>

            <div className='container'>
                <NbaScraper />
                <hr />
                <WeatherApp />
                <hr />
                <Budget />
                <hr />
                <Todo />
                <hr />
                <Nasa />
            </div>

        </>
    )
}