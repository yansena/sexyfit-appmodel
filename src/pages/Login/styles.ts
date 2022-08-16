import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background_primary };
    height: 100%;
`;

export const Content = styled.View`
    align-items: center;
    justify-content: space-around;

    margin: 0 27px;
`;

export const Logo = styled(Image)`
    width: ${RFValue(300)}px;
    height: ${RFValue(400)}px;

    margin-top: ${ getStatusBarHeight() -70}px;
`;

export const Form = styled.View`
`;

export const Footer = styled.View`
    width: 100%;
    margin-top: 60px;
`;

export const ForgetContainer = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

export const Forget = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.text_details };
    font-family: ${({ theme }) => theme.fonts.primary_400 };
`;

export const BottomFooter = styled.View`
`;


export const SignUp = styled.TouchableOpacity`
    flex-direction: row;

    margin-top: 50px;
`;


export const Icon = styled(Feather)`
    margin-right: 17.5px;
`;

export const SignUpTitle = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.main };
    font-family: ${({ theme }) => theme.fonts.primary_400 };
`;


