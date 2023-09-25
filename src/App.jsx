import React, { useState } from "react";
import axios from "axios";

function App() {
    const [search, setSearch] = useState("");
    const [temp, setTemp] = useState(0);
    const [tempMin, setTempMin] = useState(0);
    const [tempMax, setTempMax] = useState(0);
    const [weatherDescription, setWeatherDescription] = useState("");
    const [long, setLong] = useState(0);
    const [lat, setLat] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [windSpeed, setWindSpeed] = useState(0);

    const searchTyped = () => {
        if (search.trim() === "") {
            alert("Por favor, insira um local para buscar.");
            return;
        }

        console.log("Buscando...", search);

        axios
            .get(`${import.meta.env.VITE_BASE_URL}weather?q=${search}&units=metric&appid=${import.meta.env.VITE_API_KEY}`)
            .then((res) => {
                const temp = res.data.main.temp;
                const tempMin = res.data.main.temp_min;
                const tempMax = res.data.main.temp_max;
                const weatherDescription = res.data.weather[0].description;
                const longitude = res.data.coord.lon;
                const latitude = res.data.coord.lat;
                const humidity = res.data.main.humidity;
                const windSpeed = res.data.wind.speed;
                
                setTemp(temp)
                setTempMin(tempMin)
                setTempMax(tempMax)
                setWeatherDescription(weatherDescription);
                setLong(longitude)
                setLat(latitude)
                setHumidity(humidity)
                setWindSpeed(windSpeed)
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className="App">
            <header className="header">
                <h1>Previsão do Tempo</h1>
            </header>
            <main className="main">
                <input
                    type="text"
                    placeholder="Busque"
                    onChange={(event) => setSearch(event.target.value)}
                />
                <button onClick={searchTyped}>Buscar</button>
                <p>Temperatura: {temp}</p>
                <p>Temperatura mínima: {tempMin}</p>
                <p>Temperatura máxima: {tempMax}</p>
                <p>Descrição do tempo: {weatherDescription}</p>
                <p>Longitude: {long}</p>
                <p>Latitude: {lat}</p>
                <p>Humidade: {humidity}</p>
                <p>Velocidade do vento: {windSpeed}</p>
            </main>
        </div>
    );
}

export default App;
