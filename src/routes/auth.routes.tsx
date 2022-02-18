import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SplashScreen } from "../pages/Splash";
import { Login } from "../pages/Login";


export type RootStackParamsList = {
    Splash: undefined;
    Login: undefined;
}

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamsList>();

export function AppAuthRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            {/* <Screen 
                name="Splash"
                component={SplashScreen}
            /> */}
            <Screen 
                name="Login"
                component={Login}
            />
            
        </Navigator>
    )
}
