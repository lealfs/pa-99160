import React, { useState } from 'react';

const JogadorForm = ({ onAdicionar }) => {
  const [nome, setNome] = useState('');
  const [posicao, setPosicao] = useState('');
  const [idade, setIdade] = useState('');
  const [numero, setNumero] = useState('');
  const [pe, setPe] = useState('');
  const [nacionalidade, setNacionalidade] = useState('');
  const [habilidade, setHabilidade] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !posicao || !idade || !numero || !pe || !nacionalidade || !habilidade || !bio) {
      alert("Por favor, preencha todos os dados do scout!");
      return;
    }
    
    onAdicionar({ nome, posicao, idade, numero, pe, nacionalidade, habilidade, bio });
    
    // Limpar campos
    setNome(''); setPosicao(''); setIdade(''); setNumero(''); 
    setPe(''); setNacionalidade(''); setHabilidade(''); setBio('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input 
        style={styles.input} 
        placeholder="Nome do Craque" 
        value={nome} 
        onChange={(e) => setNome(e.target.value)} 
      />
      
      {/* Nacionalidade agora é um campo de texto livre */}
      <input 
        style={styles.input} 
        placeholder="Nacionalidade (ex: Brasileiro)" 
        value={nacionalidade} 
        onChange={(e) => setNacionalidade(e.target.value)} 
      />
      
      <div style={styles.row}>
        <select style={styles.select} value={habilidade} onChange={(e) => setHabilidade(e.target.value)}>
          <option value="">Atributo Principal</option>
          <option value="Velocidade">Velocidade</option>
          <option value="Finalização">Finalização</option>
          <option value="Passe Longo">Passe Longo</option>
          <option value="Drible">Drible</option>
          <option value="Defesa">Defesa</option>
          <option value="Visão de Jogo">Visão de Jogo</option>
        </select>
        
        <select style={styles.select} value={posicao} onChange={(e) => setPosicao(e.target.value)}>
          <option value="">Posição</option>
          <option value="Goleiro">Goleiro</option>
          <option value="Zagueiro">Zagueiro</option>
          <option value="Meio">Meio</option>
          <option value="Atacante">Atacante</option>
        </select>
      </div>

      <div style={styles.row}>
        <select style={styles.select} value={pe} onChange={(e) => setPe(e.target.value)}>
          <option value="">Pé</option>
          <option value="Canhoto">Canhoto</option>
          <option value="Destro">Destro</option>
        </select>
        <input type="number" style={styles.inputSmall} placeholder="Idade" value={idade} onChange={(e) => setIdade(e.target.value)} />
      </div>

      <div style={styles.row}>
        <input type="number" style={{...styles.input, width: '100%'}} placeholder="Nº Camisa" value={numero} onChange={(e) => setNumero(e.target.value)} />
      </div>

      <textarea 
        style={styles.textarea} 
        placeholder="Minibio (resumo de 2 linhas)..." 
        value={bio} 
        onChange={(e) => setBio(e.target.value)}
        rows="2"
      />

      <button type="submit" style={styles.button}>CADASTRAR NO ELENCO</button>
    </form>
  );
};

const styles = {
  form: { display: 'flex', flexDirection: 'column', gap: '8px' },
  row: { display: 'flex', gap: '8px' },
  input: { padding: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px' },
  inputSmall: { padding: '10px', borderRadius: '6px', border: '1px solid #ddd', width: '50%' },
  select: { padding: '10px', borderRadius: '6px', border: '1px solid #ddd', width: '50%', backgroundColor: '#fff', fontSize: '14px' },
  textarea: { padding: '10px', borderRadius: '6px', border: '1px solid #ddd', resize: 'none', fontFamily: 'sans-serif', fontSize: '14px' },
  button: { padding: '12px', backgroundColor: '#a50044', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', marginTop: '5px' }
};

export default JogadorForm;