import React, { useState } from "react";
import { TextInputProps} from "react-native";
import { Feather } from '@expo/vector-icons';
import { useTheme } from "styled-components";

import { 
    Container,
    IconContainer,
    InputText
} from "./styles";

interface Props extends TextInputProps{
    iconName: React.ComponentProps<typeof Feather>['name'];
    value?: string; 

}

export function PasswordInput({
    iconName,
    value,
    ...rest
 }: Props){

    const [ isFocused, setIsFocused ] = useState(false);
    const [ isFilled, setIsFilled ] = useState(false);
    const { colors } = useTheme();

    function handleInputFocus(){
        setIsFocused(true);
    }
    
    function handleInputBlur(){
        setIsFocused(false)
        setIsFilled(!!value)
    }

    return(
        <Container>

            <IconContainer>
                <Feather 
                    name={iconName}
                    size={24}
                    color={ isFocused || isFilled ? colors.main : colors.text_details }
                />

            </IconContainer>
            <InputText
                {...rest}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                isFocused={isFocused}
                secureTextEntry={true}
                
            />
        </Container>
    );
}