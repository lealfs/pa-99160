import { Route, Routes } from 'react-router-dom'
import './App.css'
import SobreNos from './components/infoJogador/SobreNos'
import Home from './components/infoJogador/Home'
import Header from './components/infoJogador/Header'
import Footer from './components/infoJogador/Footer'
import Principal from './components/infoJogador/Principal'

function App() {

  return (
    <>
      <Header />
      <main>
        {/* qualquer pagina tera header e footer*/}
        <Routes>
          <Route path="/"element={<Home />}/>
          <Route path="/sobre-nos"element={<SobreNos />}/>
          <Route path="/Principal"element={<Principal/>}/>
          {/* <Route path="/fale-conosco"element={<FaleConosco />}/> */}

        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
