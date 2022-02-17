import { Image } from 'react-native';
import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_primary };

    align-items: center;
    justify-content: center;
`;

export const Logo = styled(Image)`
    width: ${RFValue(300)}px;
    height: ${RFValue(400)}px;
`;
