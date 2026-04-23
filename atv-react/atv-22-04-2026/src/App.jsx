import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import ListaNinjas from './components/ListaNinjas'
import Rodape from './components/Rodape'

function App() {
  const [ninjas, setNinjas] = useState([
    { id: 1, nome: 'Naruto Uzumaki', rank: 'Genin', jutsu: 'Rasengan' ,aldeiaNatal: 'Aldeia Oculta da Folha' },
    { id: 2, nome: 'Sasuke Uchiha', rank: 'Genin', jutsu: 'Chidori',aldeiaNatal: 'Aldeia Oculta da Folha' },
    { id: 3, nome: 'Sakura Haruno', rank: 'Chunin', jutsu: 'Controle de Chakra',aldeiaNatal: 'Aldeia Oculta da Folha' },
    { id: 4, nome: 'Kakashi Hatake', rank: 'Jonin', jutsu: 'Mil Jutsus',aldeiaNatal: 'Aldeia Oculta da Folha' },
    { id: 5, nome: 'Rock Lee', rank: 'Genin', jutsu: 'Desconhecido',aldeiaNatal: 'Aldeia Oculta da Folha' },
  ])

  const[busca, setBusca] = useState('')

  function buscar(){
    const filtrados = ninjas.filter(ninja => ninja.nome.toLowerCase().includes(busca.toLowerCase()))
  setNinjas(filtrados)}

  function todos(){
    setNinjas([
    { id: 1, nome: 'Naruto Uzumaki', rank: 'Genin', jutsu: 'Rasengan' ,aldeiaNatal: 'Aldeia Oculta da Folha' },
    { id: 2, nome: 'Sasuke Uchiha', rank: 'Genin', jutsu: 'Chidori',aldeiaNatal: 'Aldeia Oculta da Folha' },
    { id: 3, nome: 'Sakura Haruno', rank: 'Chunin', jutsu: 'Controle de Chakra',aldeiaNatal: 'Aldeia Oculta da Folha' },
    { id: 4, nome: 'Kakashi Hatake', rank: 'Jonin', jutsu: 'Mil Jutsus',aldeiaNatal: 'Aldeia Oculta da Folha' },
    { id: 5, nome: 'Rock Lee', rank: 'Genin', jutsu: 'Desconhecido',aldeiaNatal: 'Aldeia Oculta da Folha' },
  ])
  }
  return (
    <div>
      <Header />
      <input 
      value={busca}
      onChange={(e) => {setBusca(e.target.value)}} />
      <button onClick={buscar}>Buscar Ninja</button>
      <button onClick={todos}>Mostrar Todos</button>
      <ListaNinjas ninjas={ninjas} />
      <Rodape/>
    </div>
  )
}

export default App