import React, { useState } from "react";
import axios from "axios";

import { Container,} from "./style";

import { Header } from '../components/Header/index'

import { Input } from '../components/Input'

import { Button } from '../components/Button'

import { Div } from '../components/Div'


export function App() {
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
                const longitude = res.data.coord.lon;
                const latitude = res.data.coord.lat;
                const humidity = res.data.main.humidity;
                const windSpeed = res.data.wind.speed;
                
                setTemp(temp)
                setTempMin(tempMin)
                setTempMax(tempMax)
                setLong(longitude)
                setLat(latitude)
                setHumidity(humidity)
                setWindSpeed(windSpeed)
            })
            .catch((err) => {
                console.error(err);
            });

    };

    const date = () => {
        Date = new Date();
        year = Date.getFullYear();
        month = Date.getMonth() + 1;
        day = Date.getDate();
    }

    return (
        <Container>
            <Header>
                <h3>WeatherApp</h3>
            </Header>
            <Input>
                <input
                type="text"
                placeholder="Buscar cidade"
                onChange={(event) => setSearch(event.target.value)}></input>
            </Input>

            <Button>
                <button onClick={searchTyped}>Buscar</button>
            </Button>
            <Div>
                <p>Temperatura: {temp}</p>
                <p>Temperatura mínima: {tempMin}</p>
                <p>Temperatura máxima: {tempMax}</p>
                <p>Longitude: {long}</p>
                <p>Latitude: {lat}</p>
                <p>Umidade: {humidity}</p>
                <p>Velocidade do vento: {windSpeed}</p>

            </Div>
            {/* <P>Temperatura: {temp}</P> */}


        </Container>
    );
}

// return(
//     <Container></Container>
// )
/*
    return(
        <Container>
        </Container>
    )*/

export default App;
