import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppStackRoutes } from './app.routes';
import { AppAuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";

export function Routes(){
    const { user } = useAuth()
    return(
        <NavigationContainer>
            {
                user.id ? <AppStackRoutes/> : <AppAuthRoutes/>
            }
        </NavigationContainer>
    );
}