import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';
import './styles.css'


const Home =() => {
return (
    <div className = "home-container">
        <h1 className="home-title">
            Desafio do Capítulo 3, <br />
            Bootcamp DevSuperior
        </h1>


        <p className="content">
        Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.< br/>
        Favor observar as instruções passadas no capítulo sobre a< br/> 
        elaboração deste projeto.< br/>
        Este design foi adaptado a partir de Ant Design System for Figma, de< br/>
        Mateusz Wierzbicki:  <span className="mail">antforfigma@gmail.com</span>
        </p>

        <Link to="/search" className="home-button">
        <Button text="Começar" />
      </Link>
     </div> 
)}

export default Home;