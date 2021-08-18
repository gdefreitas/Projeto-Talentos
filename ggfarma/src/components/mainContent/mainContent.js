import React, { Component } from 'react';
import imagem1 from "../../assets/imagem1.png";
import imagem2 from "../../assets/imagem2.png"
import imagem3 from "../../assets/imagem3.png"

import './mainContent.css'

function MainContent() {
    return (
        <div>

            <h1 class="laranjado">Controle de estoque</h1>
        <div class = "style-containers">
            
            
            <div class="medicine-container">
                <a href="#"><img class="image" src={imagem1}/></a>
                <h1 class="texto"><strong>Remédio 1</strong></h1>
                <button class="botao-comprar">Comprar</button>
            </div>

            <div class="medicine-container">
                <a href="#"><img class="image" src={imagem2}/></a>
                <h1 class="texto"><strong>Remédio 2</strong></h1>
                <button class="botao-comprar">Comprar</button>
            </div>

            <div class="medicine-container">
                <a href="#"><img class="image" src={imagem3}/></a>
                <h1 class="texto"><strong>Remédio 3</strong></h1>
                <button class="botao-comprar">Comprar</button>
            </div>
        </div>
        </div>
    );
}

export default MainContent;