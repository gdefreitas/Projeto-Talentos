import React, {Component} from 'react';
import './InsertItemsHeader.css'
import cartImage from "../../assets/cart.png"


function InsertItemsHeader()
{
    return (
        <div class = "container">
            <h3 class="font"><span class="preto">GG</span><span class="branco">Farma</span></h3>
            <div class = "links">

            <a href = ""class="branco campo-home" >home</a>

            <button class ="car-button"><img class="car-image" src={cartImage}/></button>
            
            </div>
             

        </div>



    );
}
export default InsertItemsHeader;