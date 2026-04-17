import React, { useState } from 'react';
import JogadorForm from './components/JogadorForm';
import JogadorLista from './components/JogadorLista';

// 1. Importa a imagem da pasta assets
import logoBarca from './assets/barca.png'; 

function App() {
  const [jogadores, setJogadores] = useState([]);

  const adicionarJogador = (novoJogador) => {
    setJogadores([...jogadores, novoJogador]);
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.logoWrapper}>
          {/* 2. Troca o src pela variável logoBarca */}
          <img 
            src={logoBarca} 
            alt="Logo Barcelona" 
            style={styles.logo}
          />
        </div>

        <h1 style={styles.title}>BARÇA MANAGER</h1>
        <p style={styles.subtitle}>Més que un club</p>
        
        <JogadorForm onAdicionar={adicionarJogador} />
        <JogadorLista jogadores={jogadores} />
      </div>
    </div>
  );
}

// ... (resto dos seus estilos permanecem iguais)
const styles = {
  page: {
    margin: 0,
    padding: 0,
    minHeight: '100vh',
    width: '100vw',
    background: 'linear-gradient(180deg, #004d98 0%, #a50044 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0
  },
  container: {
    width: '90%',
    maxWidth: '420px',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: '25px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
    margin: '20px auto'
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px'
  },
  logo: {
    width: '100px',
    height: 'auto',
    filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))'
  },
  title: {
    textAlign: 'center',
    color: '#004d98',
    fontSize: '22px',
    fontWeight: '900',
    margin: '10px 0 0 0',
    fontFamily: 'sans-serif'
  },
  subtitle: {
    textAlign: 'center',
    color: '#a50044',
    fontSize: '11px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: '20px',
    letterSpacing: '2px'
  }
};

export default App;