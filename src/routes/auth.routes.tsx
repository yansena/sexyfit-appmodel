import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SplashScreen } from "../pages/Splash";
import { Login } from "../pages/Login";
import { SignUpFirstStep } from "../pages/SignUp/FisrtStep";

export type RootStackParamsList = {
    Splash: undefined;
    Login: undefined;
    SignUpFirstStep: undefined;
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
            <Screen 
                name="SignUpFirstStep"
                component={SignUpFirstStep}
            />
            
        </Navigator>
    )
}
