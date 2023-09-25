import React, { useState } from "react"
import axios from "axios";

/** vite import dotenv :: import.meta.env.VITE_API_KEY */
function App() {
    const [search, setSearch] = useState("");

    const searchTyped = () => {
        console.log("Buscando...")
        console.log(search)
       

        axios
            .get(`${import.meta.env.VITE_BASE_URL}weather?q=${search}&units=metric&appid=${import.meta.env.VITE_API_KEY}`)
            .then((res => {
                console.log(res.data);
            }))
            .catch((err) => {
                console.error(err);
            })
    }

    return(
        <div className="App">
            <header className="header">
            <h1>Previsão do Tempo</h1>
            </header>
            <main className="main">
            {/**Busca de localização */}

            <input 
                type="text" 
                placeholder="Busque"
                onChange={(event => setSearch(event.target.value))} 
            />

            <button onClick={searchTyped}>Buscar</button>

            {/**Localização Atual */}
            <p>Rio de Janeiro, RJ</p>

            </main>
        </div>
    )
}

export default App;