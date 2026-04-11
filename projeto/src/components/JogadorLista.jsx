import React from 'react';

const JogadorLista = ({ jogadores }) => {
  return (
    <div style={styles.container}>
      <h3 style={{color: '#333', fontSize: '1.1rem'}}>Plantel Atual</h3>
      <ul style={styles.list}>
        {jogadores.map((j, index) => (
          <li key={index} style={styles.item}>
            <div style={styles.mainInfo}>
              <span style={styles.badge}>{j.numero}</span>
              <div>
                <strong style={styles.nomeText}>{j.nome}</strong>
                <div style={styles.subText}>{j.posicao} • {j.idade} anos</div>
              </div>
            </div>
            <div style={styles.peTag}>
              {j.pe}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: { marginTop: '20px' },
  list: { listStyle: 'none', padding: 0 },
  item: { 
    padding: '12px', 
    backgroundColor: '#fff',
    borderBottom: '1px solid #eee', 
    display: 'flex', 
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainInfo: { display: 'flex', alignItems: 'center', gap: '12px' },
  badge: {
    backgroundColor: '#a50044',
    color: 'white',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.85em',
    fontWeight: 'bold'
  },
  nomeText: { fontSize: '1rem', color: '#1a1a1a' },
  subText: { fontSize: '0.8rem', color: '#666' },
  peTag: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    padding: '4px 8px',
    backgroundColor: '#f0f0f0',
    borderRadius: '12px',
    color: '#444',
    fontWeight: 'bold'
  }
};

export default JogadorLista;