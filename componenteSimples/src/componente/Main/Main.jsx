import React, {useState} from "react";


const Main = () => {
    const [mostrarMensagem, setMostrarMensagem] = useState(false);
    const handleMensagemClick = () => {
        setMostrarMensagem(true);
    };

    return(
        <div>
            <button id="mensagem" onClick={handleMensagemClick} >Clique</button>
            <h2>{mostrarMensagem && <h2 style={{ display: 'block' }}>Olá, Mundo!</h2>}</h2>
            
        </div>
    )
}


export default Main;