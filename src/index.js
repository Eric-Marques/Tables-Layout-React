import './index.css' // import do arquivo CSS interno
import ReactDOM from "react-dom"
import React from 'react'

import App from './App'

ReactDOM.render( // coloca o arquivo na single page html
  <App/>,
  document.getElementById('root') // referenciando a single page
)

// ESSE JS SERVE SÓ PRA REFERENCIAR O ARQUIVO PRINCIPAL, LEMBRE-SE DISSO.