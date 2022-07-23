import { createContext, useState } from "react";

export const AutenticacaoContext = createContext({});

export function AutenticacaoProvider({ children }) {
  const [usuario, setUsuario] = useState({});

  function login(email, senha) {
    if (
      (email === "andre@email.com" && senha == "123")
    ) {
      setUsuario({
        nome: "André",
        email: email,
        endereco: "Av. Paulista",
        telefone: "(11 9999-99999)",
      });
      return "ok";
    }
    if (email === "dani@hotmail.com" && senha == "123") {
      setUsuario({
        nome: "Danielle",
        email: email,
        endereco: "Av. Central",
        telefone: "(85 8888-8888)",
      });
      return "ok";
    }
    return "Email ou senhas incorretos";
  }

  return (
    <AutenticacaoContext.Provider
      value={{
        usuario,
        login,
      }}
    >
      {children}
    </AutenticacaoContext.Provider>
  );
}
