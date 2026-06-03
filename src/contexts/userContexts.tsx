import { createContext, useState } from "react";

export type User = {
  id: string;
  nome: string;
  email: string;
};

type AuthContextData = {
  usuario: User | null;
  setUsuario: React.Dispatch<React.SetStateAction<User | null>>;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<User | null>(null);

  return (
    <AuthContext.Provider
      value={{
        usuario,
        setUsuario,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}