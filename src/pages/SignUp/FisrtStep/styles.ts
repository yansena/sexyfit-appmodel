import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background_primary };
    height: 100%;
`;

export const Content = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    /* margin: 0 27px 0px 27px; */
    margin-top: ${getStatusBarHeight() -50 }px ;
    margin-left: 27px;
    margin-right: 27px;
`;

export const Logo = styled.Image`
    width: ${RFValue(300)}px;
    height: ${RFValue(400)}px;
`;

export const Form = styled.View`
    width: 100%;
    margin-top: -50px;
`;

export const Footer = styled.View`
    margin-top: 25px;
`;

export const BottomFooter = styled.View`
    flex-direction: row;
`;

export const BackSignIn = styled.TouchableOpacity`

`;

export const Icon = styled(Feather)`

`;

export const BackTitle = styled.Text`

`;
