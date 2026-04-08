import { useState, useState } from "react"

const Form = () => {
    //criando os estados
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [email, setEmail] = useState("")

    //criando a função que ira lidar com a submissão do formulário
    const handleSubmit = (event) => {

        event.preventDefault() //para evitar que a página seja recarregada quando o formulário for enviado

        //aqui os dados serão enviados
        console.log(nome); 
        console.log(sobrenome);
        console.log(email);

        //aqui seria enviaddo um arequisição POST para a API com as infos a serem cadastradas
    }

    return (
        <>
        <br />
        <h3>Formulário de Cadastro</h3>
        <br />
        <form onSubmit={handleSubmit}> 
            <input 
            type="text" 
            placeholder="Insira seu nome" 
            value={nome}
            // quando o valor da input mudar< pegue o novo valor (event.target.value) e atualize o estado com este valor 
            onChange={(event) => setNome(event.target.value)} 
            />

            <input 
            type="text" 
            placeholder="Insira seu sobrenome" 
            value={sobrenome} 
            onChange={(event) => setSobrenome(event.target.value)} 
            />

            <input 
            type="text" 
            placeholder="Insira seu email" 
            value={email}
            onChange={(event) => setEmail(event.target.value)}  
            />

            <br />

            <button type="submit">Enviar</button>
        </form>

        <br />
        {nome} <br />
        {sobrenome} <br />
        {email} <br />
        </>
    )
}
export default Form