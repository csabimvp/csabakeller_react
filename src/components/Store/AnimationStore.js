// Importing React components
import React, { useEffect } from 'react';

// Importing 3rd party components
import lottie from 'lottie-web';

// Importing animations
import ClearAnimation from '../animations/Clear.json';
import CloudyAnimation from '../animations/Cloudy.json';
import DrizzleAnimation from '../animations/Drizzle.json';
import RainAnimation from '../animations/Rain.json';
import ThunderstormAnimation from '../animations/Thunderstorm.json';
import SnowAnimation from '../animations/Snow.json';

export function Clear() {

    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#weather-animation"),
            animationData: ClearAnimation,
        })
    }, [])

    return (
        <>
            <div className='animation-weather animations' id='weather-animation'></div>
        </>
    )
}

export function Cloudy() {

    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#weather-animation"),
            animationData: CloudyAnimation,
        })
    }, [])

    return (
        <>
            <div className='animation-weather animations' id='weather-animation'></div>
        </>
    )
}

export function Drizzle() {

    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#weather-animation"),
            animationData: DrizzleAnimation,
        })
    }, [])

    return (
        <>
            <div className='animation-weather animations' id='weather-animation'></div>
        </>
    )
}

export function Rain() {

    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#weather-animation"),
            animationData: RainAnimation,
        })
    }, [])

    return (
        <>
            <div className='animation-weather animations' id='weather-animation'></div>
        </>
    )
}

export function Thunderstorm() {

    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#weather-animation"),
            animationData: ThunderstormAnimation,
        })
    }, [])

    return (
        <>
            <div className='animation-weather animations' id='weather-animation'></div>
        </>
    )
}

export function Snow() {

    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#weather-animation"),
            animationData: SnowAnimation,
        })
    }, [])

    return (
        <>
            <div className='animation-weather animations' id='weather-animation'></div>
        </>
    )
}