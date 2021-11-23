import React from 'react';
import './TabelaSkills.css'

import Tabela from '../../data/Produtos';

export default function skills(props) {
  const myskills = Tabela.map((Tabela) => {
    return (
      <tr>
        <td>{Tabela.id}</td>
        <td>{Tabela.nome}</td>
        <td>{Tabela.nota}</td>
      </tr>
    );
  })

  return (
    <div className='TabelaDeSkills'>
        <table>
          <thead>
            <tr>
              <th>Ordem</th>
              <th>Nome</th>
              <th>Nota</th>
            </tr>
          </thead>
          <tbody>
            { myskills }
          </tbody>
        </table>
    </div>
  )
}