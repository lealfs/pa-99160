import './style.css'

export default function Footer(){
    return(
        <footer>
            <div>
                <strong>contabilidade simples</strong> - CNPJ 00.000.000/0001
                <br/>
                rua a, 123 - centro - salvador / bahia
                <br/>
                © {new Date().getFullYear()} todos os direitos reservados
            </div>
        </footer>
    )
}