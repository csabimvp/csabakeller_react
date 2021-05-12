import React, { useState, useEffect } from 'react';

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaApod() {
    const [photoData, setPhotoData] = useState(null);
    const [isLoading, setisLoading] = useState(false)

    useEffect(() => {
        setisLoading(true)
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );
            const data = await res.json();
            setPhotoData(data);
            setisLoading(false);
        }
    }, []);

    if (!photoData) return <h1>Loading...</h1>

    return (
        <div className='container pt-5 mb-4'>
            <div className='row'>
                <div className="col nasa-photo">
                    {isLoading &&
                        <>
                            <h2>Loading...</h2>
                            <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </>
                    }
                    {photoData.media_type === "image" ? (
                        <img
                            src={photoData.url}
                            alt={photoData.title} className="photo"
                        />
                    ) : (
                        <iframe
                            title="space-video"
                            src={photoData.url}
                            frameBorder="0"
                            gesture="media"
                            allow="encrypted-media"
                            allowFullScreen
                            className="photo"
                        />
                    )}
                </div>
                <div className='row nasa-text pt-5 mb-4'>
                    <h1>{photoData.title}</h1>
                    <p className="date lead">{photoData.date}</p>
                    <hr className='nasa-divider'></hr>
                    <p className="explanation">{photoData.explanation}</p>
                </div>

            </div>
        </div>
    )
}