import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Card = ({title}) => {
  return(
    <div>
      <h2>{title}</h2>
    </div>
  )
}


const App = () => {
  return(
    <div>
      <Card title="Lion King"/>
      <Card title="Avatar"/>
      <Card title="One piece"/>
    </div>
  )
}

export default App
