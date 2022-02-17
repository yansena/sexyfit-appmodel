import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppStackRoutes } from './app.routes';
import { AppAuthRoutes } from "./auth.routes";

export function Routes(){
    const user = false;
    return(
        <NavigationContainer>
            {
                user ? <AppStackRoutes/> : <AppAuthRoutes/>
            }
        </NavigationContainer>
    );
}