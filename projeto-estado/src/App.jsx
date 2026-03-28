import './App.css'
import InfoAluno from './components/InfoAluno'
import AdicionarAluno from './components/InfoAluno/AdicionarAluno'
import InfoCurso from './components/InfoAluno/InfoCurso'
import AdicionarAluno from './components/InfoAluno/AdicionarAluno'

function App() {
  return (
    <>
      <h1>Ola, mundo</h1>

      <InfoAluno />

      <br />
      <InfoCurso />

      <br />
      <AdicionarAluno />
    </>
  )
}

export default App
