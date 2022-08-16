import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Home } from "../pages/Home";

export type RootStackParamsList = {
    Home: undefined;
}

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamsList>();

export function AppStackRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}} >
            <Screen 
                name="Home"
                component={Home}
            />
            
        </Navigator>
    )
}
