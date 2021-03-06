import React, { Component } from 'react'
import './InsertItemsContent.css'
import uploadImage from "../../assets/upload.png"

function InsertItemsContent() {
    return (

        <div >
            <form action="/pagina-processa-dados-do-form" method="post">

                <h1 class="laranjado">Cadastro de Medicamento</h1>
                
                <div class="page-content">
                    <div>
                        <h3 class="place-name">Nome</h3>
                        <input placeholder="Nome do Medicamento" class="input-content" ></input>
                        <br/>
                        <h3 class="place-name">Imagem</h3>
                        <div class="image-background">
                            <p class="text">submeter Imagem</p>
                        </div>
                        
                        <br/>
                        <button class = "up-button"><img src={uploadImage}/></button>
                    </div>
                    <div class="place-desc">
                        <h3 class="place-name">Descrição</h3>
                        <input placeholder="Descreva o medicamento" class="input-content-desc" ></input>
                    </div>


                </div>
                        <div class = "position">
                            <button class = "ok-button">Confirmar</button>

                        </div>

            </form>
        </div>




        /*<div>
            <div>
                <h1 class="laranjado">Cadastro de Medicamento</h1>
            </div>
            
            <div>
                <a class="place">Nome</a>
                <input placeholder="Nome do Medicamento" class="input-content" ></input>
            </div>

            <div class = "place">
            <a>Descrição</a>
            <input placeholder="Descreva o medicamento" class="input-content" ></input>
            </div>

            <div>
            <a>Imagem</a>
            <input placeholder="submeter Imagem" class="input-content" ></input>
            </div>

            


        </div>
        */
    );
}

export default InsertItemsContent;