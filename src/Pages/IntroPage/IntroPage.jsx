import React, { useEffect, useState } from 'react'
import "./IntroPage.css"
//import { weather } from '../../weather'

export default function IntroPage({darkMode}){
    
    const [weatherData, setWeatherData] = useState();

    function getData() {

        const key = "97b866a027964a528bc15641222904";
        const city = "Tacoma"
        const baseUrl = "https://api.weatherapi.com/v1"
        const method = "/current.json"
        const alert = "yes"
    
        const endpoint = `${baseUrl}${method}?key=${key}&q=${city}&alerts=${alert}`
    
        fetch(endpoint).then(response => {
            return response.json()
        }, netWorkError => {
            console.log(netWorkError)
        }).then(jsonResponse => {
            console.log(jsonResponse)
            setWeatherData(jsonResponse.current)
        })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className={darkMode ? "dark-intro" : "intro"}>
            <div className={darkMode ? "dark-intro-banner" : "intro-banner"}>
                <div className="intro-banner-text">
                    <h1>PLU Learn</h1>
                    <h2>Start Learning in the Learn Page</h2>
                    <p>This site is not affiliated with PLU but offers practice problems to solve for anyone.</p>
                </div>
            </div>
            <div className="intro-plu">
            {weatherData ? 
            <div className="intro-plu-info">
                <h1>Weather at PLU</h1>
                <h2>{weatherData.condition.text}</h2>
                <img className="img-weather" src ={weatherData.condition.icon} alt={weatherData.condition.text}/>
                <h2>{weatherData.temp_f} degrees Farenheit</h2>
            </div>
            : <h1>Loading</h1>}
            </div>
            <div className={darkMode ? "dark-intro-information" : "intro-information"}>
                <h1>Future Updates</h1>
                <div>
                    <ul>
                        <li>Adding other subjects</li>
                        <li>Adding Functionality to Contact Page</li>
                        <li>Add Play section</li>
                        <li>Add tools</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}