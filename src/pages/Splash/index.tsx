import React from 'react';
import { Text, View } from 'react-native';

import Sexfit_logo from '../../assets/sexyfit_logo.png'

import {
    Container,
    Logo
} from './styles';

export function SplashScreen() {
    return (
       <Container>
        <Logo source={Sexfit_logo} resizeMode='contain' resizeMethod='resize'/>
       </Container>
    );
}