import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import theme from "../../styles/theme";
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.main };
    height: 62px;

    align-items: center;
    justify-content: center;

    border-radius: 5px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text };
    font-size: ${RFValue(20)}px;

    font-family: ${({ theme }) => theme.fonts.primary_500 };
`;