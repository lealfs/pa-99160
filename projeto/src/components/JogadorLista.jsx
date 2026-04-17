import React from 'react';

const JogadorLista = ({ jogadores }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      {jogadores.map((j, index) => (
        <div key={index} style={styles.card}>
          <div style={styles.header}>
            <div style={styles.num}>{j.numero}</div>
            <div style={{ flex: 1 }}>
              <div style={styles.nome}>{j.nome.toUpperCase()}</div>
              <div style={styles.subInfo}>{j.nacionalidade} • {j.posicao} • {j.idade} anos</div>
            </div>
            <div style={styles.habilidadeTag}>{j.habilidade}</div>
          </div>
          
          <div style={styles.bioBox}>
            <strong>Bio:</strong> {j.bio}
          </div>
          
          <div style={styles.footer}>
            <span>Pé Dominante: <strong>{j.pe}</strong></span>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '15px',
    marginBottom: '15px',
    borderLeft: '5px solid #004d98',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
  },
  header: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' },
  num: {
    backgroundColor: '#004d98', color: '#edbb00', width: '35px', height: '35px',
    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'
  },
  nome: { fontWeight: 'bold', fontSize: '16px', color: '#333' },
  subInfo: { fontSize: '12px', color: '#666' },
  habilidadeTag: {
    fontSize: '9px', backgroundColor: '#edbb00', color: '#000',
    padding: '4px 8px', borderRadius: '4px', fontWeight: 'bold', textTransform: 'uppercase'
  },
  bioBox: {
    fontSize: '13px', color: '#444', fontStyle: 'italic',
    padding: '8px', backgroundColor: '#f9f9f9', borderRadius: '4px', border: '1px solid #eee'
  },
  footer: { marginTop: '10px', fontSize: '11px', color: '#888', textAlign: 'right' }
};

export default JogadorLista;