// Importing animations
import { Clear, Cloudy, Drizzle, Rain, Thunderstorm, Snow } from './AnimationStore';

export default function WeatherAnimation({ weather }) {
    switch (weather) {
        case 'Clouds': {
            return <Cloudy />
        }
        case 'Clear': {
            return <Clear />
        }
        case 'Snow': {
            return <Snow />
        }
        case 'Rain': {
            return <Rain />
        }
        case 'Drizzle': {
            return <Drizzle />
        }
        case 'Thunderstorm': {
            return <Thunderstorm />
        }
        default: {
            return <p className='no-animation'>I don't have an animation for <span><strong>{weather}</strong></span> yet I'm afraid...</p>
        }
    }
}