import React from "react";
import './Liketowork.css'

import js from '../../Images/js-logo.png'
import reactl from '../../Images/react.png'

export default function likeToWord(props) {
  return (
    <div>
      <img class="jslogo" src={js} alt="Javascript" />
      <img class="reactlogo" src={reactl} alt="" />
    </div>
  )
}