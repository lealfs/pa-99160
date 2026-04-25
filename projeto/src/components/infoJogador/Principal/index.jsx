import { useState } from 'react';
import './style.css';

const Principal = () => {
  
 
  const [contador, setContador] = useState(0);


  function lidarComClique() {
    setContador(contador + 1);
  }


  return (
    <main className="principal-container">
      <h1>Seção Principal</h1>
      <p>Este é o componente principal da sua página.</p>
      
      {/* Criamos uma caixinha para testar a interação */}
      <div className="area-interativa" style={{ marginTop: '30px', padding: '20px', border: '1px solid #333', borderRadius: '8px' }}>
        
        <h2>Testando o JavaScript</h2>
        
        {/* Mostramos o valor da variável contador aqui */}
        <p>Você clicou no botão <strong>{contador}</strong> vezes.</p>
        
        {/* Quando o botão é clicado (onClick), ele chama a função lidarComClique */}
        <button 
          onClick={lidarComClique}
          style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#00f2fe', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}
        >
          Clique em mim!
        </button>

      </div>
    </main>
  );
};

export default Principal;