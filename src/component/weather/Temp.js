import React, { useState, useEffect } from 'react'
import './style.css'
import Weathercard from './Weathercard'

const Temp = (props) => {

    const [searchValue, setSearchValue] = useState("delhi")
    const [tempInfo, setTempInfo] = useState({})
    // geting weather data
    const getWeatherInfo = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${props.apiKey}`
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            const { temp, pressure, humidity } = data.main
            const { main: weathermood } = data.weather[0]
            const { name } = data
            const { speed } = data.wind
            const { country, sunset } = data.sys

            const myNewWeatherInfo = {
                temp, pressure, humidity,weathermood,name,speed,country, sunset
            };
            setTempInfo(myNewWeatherInfo)

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getWeatherInfo();
    }, [])

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" autoFocus value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='search...' id='search' className='searchTerm' />
                    <button className="searchButton" type='button' onClick={getWeatherInfo}>
                        Search
                    </button>
                </div>
            </div>
            {/* our card */}
            <Weathercard tempInfo={tempInfo}/>
        </>
    )
}

export default Temp
