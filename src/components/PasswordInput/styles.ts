import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface InputProps{
    isFocused: boolean
}

export const Container = styled.View`
    flex-direction: row;
`;

export const IconContainer = styled.View`
    width: 50px;
    height: 60px;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background_secondary };
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`;

export const InputText = styled(TextInput)<InputProps>`
    flex: 1;

    background-color: ${({ theme }) => theme.colors.background_secondary };
    color: ${({ theme }) => theme.colors.text };

    font-family: ${({ theme }) => theme.fonts.primary_400 };
    font-size: ${RFValue(15)}px;

    /* margin: 0 20px; */
    padding: 0 23px;

    /* border-radius: 5px; */
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`;