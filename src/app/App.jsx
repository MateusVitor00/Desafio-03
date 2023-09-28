import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container,} from "./style";
import { Header } from '../components/Header/index'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { Div } from '../components/Div'
import { MapComponent } from '../components/MapComponent'

export function App() {
    const [search, setSearch] = useState("");
    const [temp, setTemp] = useState(0);
    const [long, setLong] = useState(0);
    const [lat, setLat] = useState(0);
    const [showContent, setShowContent] = useState(false);

    const searchTyped = () => {
        if (search.trim() === "") {
            alert("Por favor, insira o nome de uma cidade.");
            return;
        }

        console.log("Buscando...", search);


        axios
            .get(`${import.meta.env.VITE_BASE_URL}weather?q=${search}&units=metric&appid=${import.meta.env.VITE_API_KEY}`)
            .then((res) => {
                const temp = res.data.main.temp;
                const longitude = res.data.coord.lon;
                const latitude = res.data.coord.lat;
                
                setTemp(temp)
                setLong(longitude)
                setLat(latitude)
                setShowContent(true);
            })
            .catch((err) => {
                console.error(err);
            });

    };

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
                {showContent && ( 
                    <div>
                        <p>Temperatura: {temp}</p>
                        <p>Longitude: {long}</p>
                        <p>Latitude: {lat}</p>
                    </div>
                )}

                {showContent && ( <MapComponent latitude={lat} longitude={long} temperature={temp}>    
            </MapComponent>)}
            </Div>

        </Container>
    );
}

export default App;
