import { useState } from "react"
import './style.css'

function AdicionarAluno() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [alunos, setAlunos] = useState([])
    // Função para adicionar um aluno na lista.
    const handleAdicionarAluno = (event) => {
        event.preventDefault()

        // Se os campos estiverem preenchidos...
        if (nome && email) {
            setAlunos([...alunos, {nome, email}]) // Adicionar na lista.
            setNome("") // Apaga o nome informado deixando o campo vazio.
            setEmail("") // Apaga o email informado deixando o campo vazio.
        }
    }

    return (
        <div>
            <h2>Adicionar Aluno:</h2>

            <form onSubmit={handleAdicionarAluno}>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">
                    Adicionar
                </button>
            </form>
            <hr />
            <h2>Alunos Adicionados</h2>
            <ul>
                {alunos.map((aluno, index) => (
                    <li key={index}>
                        {aluno.nome} - {aluno.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AdicionarAluno

