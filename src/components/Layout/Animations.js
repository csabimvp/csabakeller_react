// Importing React components
import React, { useEffect, createRef } from 'react';

// Importing 3rd party components
import lottie from 'lottie-web';

// Importing animations
import Avatar from '../animations/Avatar.json';
import Groceries from '../animations/groceries.json';
import Galaxy from '../animations/galaxy.json';
import WriteOn from '../animations/WriteOn.json';
import Loader from '../animations/Loader.json';
import PiggyBank from '../animations/PiggyBank.json';
import Thunderstorm from '../animations/Thunderstorm.json';
import Clear from '../animations/Clear.json';
import Cloudy from '../animations/Cloudy.json';
import Drizzle from '../animations/Drizzle.json';
import Rain from '../animations/Rain.json';

export default function Animations() {

    let avatarContainer = createRef()
    let GroceriesContainer = createRef()
    let PiggyBankContainer = createRef()
    let LoaderContainer = createRef()
    let ThunderstormContainer = createRef()
    let ClearContainer = createRef()
    let CloudyContainer = createRef()
    let DrizzleContainer = createRef()
    let RainContainer = createRef()
    let GalaxyContainer = createRef()
    let WriteOnContainer = createRef()

    useEffect(() => {
        lottie.loadAnimation({
            container: avatarContainer.current,
            animationData: Avatar,
        })
        lottie.loadAnimation({
            container: GalaxyContainer.current,
            animationData: Galaxy,
        })
        lottie.loadAnimation({
            container: WriteOnContainer.current,
            animationData: WriteOn,
        })
        lottie.loadAnimation({
            container: GroceriesContainer.current,
            animationData: Groceries,
        })
        lottie.loadAnimation({
            container: LoaderContainer.current,
            animationData: Loader,
        })
        lottie.loadAnimation({
            container: PiggyBankContainer.current,
            animationData: PiggyBank,
        })
        lottie.loadAnimation({
            container: ThunderstormContainer.current,
            animationData: Thunderstorm,
        })
        lottie.loadAnimation({
            container: ClearContainer.current,
            animationData: Clear,
        })
        lottie.loadAnimation({
            container: CloudyContainer.current,
            animationData: Cloudy,
        })
        lottie.loadAnimation({
            container: DrizzleContainer.current,
            animationData: Drizzle,
        })
        lottie.loadAnimation({
            container: RainContainer.current,
            animationData: Rain,
        })
    })

    return (
        <div className='container'>
            <div className='row mb-4 text-center'>
                <p>These animations were made by me and <strong>@abirdiecrafts</strong> together, we are having so much fun creating them. More to come in the future…</p>
            </div>
            <div className='row'>
                <div className='col pt-5 mb-4 animation-wrapper'>
                    <div className='animation animations' ref={avatarContainer}></div>
                    <h1 className='text-center mt-4 pt-2'>
                        Avatar Animation
                    </h1>
                </div>
                <div className='col pt-5 mb-4 animation-wrapper'>
                    <div className='animation animations' ref={GroceriesContainer}></div>
                    <h1 className='text-center mt-4 pt-2'>
                        Grocery List Animation
                    </h1>
                </div>
                <div className='col pt-5 mb-4 animation-wrapper'>
                    <div className='animation animations' ref={LoaderContainer}></div>
                    <h1 className='text-center mt-4 pt-2'>
                        Loading Wrapper Animation
                    </h1>
                </div>
                <div className='col pt-5 mb-4 animation-wrapper'>
                    <div className='animation animations' ref={GalaxyContainer}></div>
                    <h1 className='text-center mt-4 pt-2'>
                        Galaxy Animation
                    </h1>
                </div>
                <div className='col pt-5 mb-4 animation-wrapper'>
                    <div className='animation animations' ref={WriteOnContainer}></div>
                    <h1 className='text-center mt-4 pt-2'>
                        Text Animation
                    </h1>
                </div>
                <div className='col pt-5 mb-4 animation-wrapper'>
                    <div className='animation animations' ref={PiggyBankContainer}></div>
                    <h1 className='text-center mt-4 pt-2'>
                        Piggy Bank Animation
                    </h1>
                </div>
                <div className='col pt-5 mb-4 animation-wrapper'>
                    <div className='animation animations' ref={ThunderstormContainer}></div>
                    <h1 className='text-center mt-4 pt-2'>
                        Thunderstorm Animation
                    </h1>
                </div>
                <div className='col pt-5 mb-4 animation-wrapper'>
                    <div className='animation animations' ref={ClearContainer}></div>
                    <h1 className='text-center mt-4 pt-2'>
                        Sunny Weather Animation
                    </h1>
                </div>
                <div className='col pt-5 mb-4 animation-wrapper'>
                    <div className='animation animations' ref={CloudyContainer}></div>
                    <h1 className='text-center mt-4 pt-2'>
                        Cloudy Weather Animation
                    </h1>
                </div>
                <div className='col pt-5 mb-4 animation-wrapper'>
                    <div className='animation animations' ref={DrizzleContainer}></div>
                    <h1 className='text-center mt-4 pt-2'>
                        Drizzle Weather Animation
                    </h1>
                </div>
                <div className='col pt-5 mb-4 animation-wrapper'>
                    <div className='animation animations' ref={RainContainer}></div>
                    <h1 className='text-center mt-4 pt-2'>
                        Rainy Weather Animation
                    </h1>
                </div>
            </div>
        </div>
    )
}