import React, { useState } from 'react';

const JogadorForm = ({ onAdicionar }) => {
  const [nome, setNome] = useState('');
  const [posicao, setPosicao] = useState('');
  const [idade, setIdade] = useState('');
  const [numero, setNumero] = useState('');
  const [pe, setPe] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verifica se todos os campos foram preenchidos, incluindo os novos selects
    if (!nome || !posicao || !idade || !numero || !pe) {
      alert("Por favor, selecione todas as opções!");
      return;
    }
    
    onAdicionar({ nome, posicao, idade, numero, pe });
    
    // Reseta o formulário
    setNome('');
    setPosicao('');
    setIdade('');
    setNumero('');
    setPe('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      {/* Nome continua texto para liberdade total */}
      <input 
        style={styles.input}
        placeholder="Nome do Jogador" 
        value={nome} 
        onChange={(e) => setNome(e.target.value)} 
      />

      {/* Seleção de Posição */}
      <select 
        style={styles.input} 
        value={posicao} 
        onChange={(e) => setPosicao(e.target.value)}
      >
        <option value="">Selecione a Posição</option>
        <option value="Goleiro">Goleiro</option>
        <option value="Zagueiro">Zagueiro</option>
        <option value="Lateral">Lateral</option>
        <option value="Meio-Campo">Meio-Campo</option>
        <option value="Atacante">Atacante</option>
      </select>

      <div style={styles.row}>
        <input 
          type="number"
          style={{...styles.input, flex: 1}}
          placeholder="Idade" 
          value={idade} 
          onChange={(e) => setIdade(e.target.value)} 
        />
        <input 
          type="number"
          style={{...styles.input, flex: 1}}
          placeholder="Nº Camisa" 
          value={numero} 
          onChange={(e) => setNumero(e.target.value)} 
        />
      </div>

      {/* Seleção de Pé Dominante */}
      <select 
        style={styles.input} 
        value={pe} 
        onChange={(e) => setPe(e.target.value)}
      >
        <option value="">Pé Dominante</option>
        <option value="Canhoto">Canhoto (Esquerdo)</option>
        <option value="Destro">Destro (Direito)</option>
        <option value="Ambidestro">Ambidestro</option>
      </select>

      <button type="submit" style={styles.button}>Cadastrar no Barça</button>
    </form>
  );
};

const styles = {
  form: { display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' },
  row: { display: 'flex', gap: '10px' },
  input: { 
    padding: '12px', 
    borderRadius: '6px', 
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    fontSize: '14px'
  },
  button: { 
    padding: '12px', 
    backgroundColor: '#004d98', 
    color: 'white', 
    border: 'none', 
    cursor: 'pointer', 
    fontWeight: 'bold',
    borderRadius: '6px',
    marginTop: '5px'
  }
};

export default JogadorForm;