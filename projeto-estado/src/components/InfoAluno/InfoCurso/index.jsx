import { useState } from "react"
import './style.css'

function InfoCurso() {
    const [nome, setNome] = useState("Programaçao de aplicativos")
    const [cargaHoraria, setCargaHoraria] = useState(90)
    const [local, setLocal] = useState("SENAI")

    return (
        <div className= 'info-curso'>
            <h2>Dados do curso: </h2>
            <p><strong>Nome:</strong> {nome}</p>
            <p><strong>Carga horaria:</strong> {cargaHoraria}</p>
            <p><strong>Local:</strong> {local}</p>
        </div>
    )
}

export default InfoCurso