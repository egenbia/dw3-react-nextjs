//importando o axios
import axios from "axios";
//função que coleta o token do localStorage
export const getAxiosConfig = () => ({
    headers: {
        Authorization: `Bearer ${
            typeof window !== "undefined"
                ? (localStorage.getItem("token") ?? "")
                : ""
        }`,
    }
});

//função que realiza o login
export const login = async (email, password) => {
    try {
        const response = await axios.post("http://localhost:4000/auth",
            {
                email,
                password
            })
        //após o login a API retorna o token 
        //coletando o token
        const token = response.data.token;
        //armazenando o token no localStorage do navegador
        localStorage.setItem("token", token);
        return { success: true }
    } catch (error) {
        return { success: false, message: error.message }
    }
}