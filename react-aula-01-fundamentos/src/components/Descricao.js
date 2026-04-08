const Descricao = (props) => {
    return (
        <>
        <div>
            <p>A cidade do usuário é: {props.cidade}.</p>
            <p>A idade do usuário é: {props.idade} anos.</p>
        </div>
        </>
    )
}
export default Descricao;