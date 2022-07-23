import React, { useState, createContext, useContext } from "react";
type AuthUser = {
    name: string;
    email: string;
};
type UserContextProviderProps = {
    children: React.ReactNode;
};
type UserContextType = {
    user: AuthUser;
    setUser: React.Dispatch<React.SetStateAction<AuthUser>>;
};
const UserContext = createContext({} as UserContextType);
export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
