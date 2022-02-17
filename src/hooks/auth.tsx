import React, {
    createContext,
    useState,
    useContext,
    ReactNode
} from "react";

import { Alert } from "react-native";
import { api } from "../services/api";

interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

interface SignCredentials {
    email: string;
    password: string;
}

interface AuthContextData{
    user: User;
    signIn: (crendentials: SignCredentials) => Promise<void>;
}

interface AuthProviderProps{
    children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData );

function AuthProvider({ children } : AuthProviderProps){
    const [ userData, setUserData ] = useState<User>({} as User);

    async function signIn({email, password} : SignCredentials) {
        try {
            const response = await api.get(`/users`);

            console.log("INFOS" + email + password) ;
            console.log(response.data);

            return Alert.alert("fuck")
            
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <AuthContext.Provider value={{
            user: userData,
            signIn
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };




