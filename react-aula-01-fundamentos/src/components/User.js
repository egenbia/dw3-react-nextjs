// Expressões Javascript
// Como exibir variáveis JS dentro do HTML
const User = () => {
    // Devemos criar as variáveis dentro da função do componente
    const name = "Diego Max"

    return (
        <>
            <div>Bem-vindo, {name}!</div>
        </>
    );
};

export default User;