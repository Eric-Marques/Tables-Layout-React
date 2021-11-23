import React from "react";

import me from '../../Images/ala.png'
import './Titulo.css'

export default function Hello(props) {
  return (
    <div>
      <h1>Olá a todos, eu sou o Vyn</h1>
      <img class="me" src={me} alt="Eu :)" />
      <h2>Minhas tecnologias são</h2>
    </div>
  )
}