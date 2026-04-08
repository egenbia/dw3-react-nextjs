import Descricao from "@/components/Descricao";
import MeuComponente from "@/components/MeuComponente";
import User from "@/components/User";
import Form from "@/components/Form";

export default function Home() {
  return (
    <>
      <h1>Olá, mundo!</h1>
      <p>Bem-vindo ao meu primeiro site em React.</p>
      <br />
      <MeuComponente />
      <br />
      <User />
      <br />
      {/* Chamando o componente Descricao e passando dados externos para ele */}
      <Descricao cidade="Registro" idade={18} />

      
    </>
  );
}
