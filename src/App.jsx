import React from "react";
import './App.css'

import Title from './components/titles/Titulo'
import Skills from './components/titles/Liketowork'
import MyTable from './components/tabelinha/TabelaSkills'


export default function App(props) {
  return (
    <div className="app">
      <div className="titulos">
        <Title/>
        <Skills/>
      </div>
      <div className="tabelapoggers">
        <MyTable/>
        <h3>Obrigado pela atenção!</h3>
      </div>
    </div>
  )
}