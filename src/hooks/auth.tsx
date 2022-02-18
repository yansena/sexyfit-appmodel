import React, {
    createContext,
    useState,
    useContext,
    ReactNode
} from "react";
import { useNavigation } from "@react-navigation/native";

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
            
            const findUser : User = response.data.find((value) => value.email == email)
            
            if(findUser && findUser.password === password){
                // console.log(findUser)
                setUserData(findUser)
            } else {
                Alert.alert("Login ou senha incorretos")
            }

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




