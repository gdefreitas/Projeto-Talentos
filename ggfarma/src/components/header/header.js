import React, {Component} from 'react'
import './header.css';
import lupaImage from "../../assets/lupa.png"
import cartImage from "../../assets/cart.png"


function Header() {
    return (
      <div class="container">
        <h3 class="font"><span class="preto">GG</span><span class="branco">Farma</span></h3>
                        
        <div class="links">
          <a href = ""class="branco campo-login" >Registre-se</a>
          
          
          <a href = ""class="branco">Cadastro de Medicamento</a>

          
          <label class="preto search-text">Buscar</label>
          <input placeholder="Buscar medicamento" class="input-field" ></input>

          <button class = "search-button"><img class="search-button" src={lupaImage}/></button>
          
          <a href="#"><img class="cart-Image" src={cartImage}/></a>
        </div>
        
      </div>
      

    );
  }

  <div></div>
  
  export default Header;