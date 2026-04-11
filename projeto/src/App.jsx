import React, { useState } from 'react';
import JogadorForm from './components/JogadorForm';
import JogadorLista from './components/JogadorLista';

function App() {
  const [jogadores, setJogadores] = useState([]);

  const adicionarJogador = (novoJogador) => {
    setJogadores([...jogadores, novoJogador]);
  };

  return (
    <div style={styles.app}>
      {/* AREA DA LOGO - O SEGREDO ESTÁ AQUI */}
      <div style={styles.logoContainer}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/pt/thumb/4/43/FCBarcelona.png/150px-FCBarcelona.png" 
          alt="Escudo do Barcelona" 
          style={styles.logo}
        />
      </div>

      <h1 style={styles.title}>Plantel do Barça</h1>
      
      <JogadorForm onAdicionar={adicionarJogador} />
      <JogadorLista jogadores={jogadores} />
    </div>
  );
}

const styles = {
  app: {
    maxWidth: '450px',
    margin: '30px auto',
    padding: '20px',
    borderRadius: '15px',
    fontFamily: 'sans-serif',
    backgroundColor: '#fff',
    boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center', // Centraliza na horizontal
    alignItems: 'center',     // Centraliza na vertical
    width: '100%',
    marginBottom: '20px',
  },
  logo: {
    width: '120px',           // Tamanho definido
    height: 'auto',
    display: 'block',         // Garante que se comporte como bloco
  },
  title: {
    textAlign: 'center',
    color: '#004d98',
    marginBottom: '20px',
    fontSize: '22px',
    fontWeight: '800',
    textTransform: 'uppercase'
  }
};

export default App;