import './style.css'

function InfoAluno() {
    const nome ="João Silva"
    const idade = 20
    const curso = "Desenvolvimento de Sistemas"

    return (
        <div className='info-aluno'>
            <h2>Informações do aluno:</h2>
            <p><strong>Nome:</strong> {nome}</p>
            <p><strong>Idade:</strong> {idade}</p>
            <p><strong>Curso:</strong> {curso}</p>
        </div>
    )
}

export default InfoAluno