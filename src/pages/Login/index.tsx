import React, { useState } from 'react';
import { 
    StatusBar, 
    KeyboardAvoidingView, 
    Keyboard, 
    TouchableWithoutFeedback,
    Platform,
    Alert
} from 'react-native'
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import * as Yup from 'yup';

import {
    Container,
    Content,
    Logo,
    Form,
    Footer,
    ForgetContainer,
    Forget,
    BottomFooter,
    SignUp,
    Icon,
    SignUpTitle
} from './styles';

import Sexfit_logo from '../../assets/sexyfit_logo.png'

import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/auth';

import { RootStackParamsList } from '../../routes/auth.routes';

export function Login() {

    const [ email, setEmail ] = useState('') 
    const [ password, setPassword ] = useState('');

    const { colors } = useTheme()
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

    const { signIn } = useAuth();

    async function handleSignIn(){
        
        try {
            
            const schema = Yup.object().shape({
                password: Yup.string()
                .required('Digita a senha'),
                email: Yup.string()
                .required('Digite um email')
                .email('Email inválido')
            });

            await schema.validate({ email, password })
            
            signIn({email, password});
            // Alert.alert("CHEGOUUU!");
            // navigation.navigate('Home');
        } catch (error) {
            console.log(error);
            if(error instanceof Yup.ValidationError){
                Alert.alert(error.message)
            } else {
                Alert.alert(
                    'Erro na autenticação',
                    'Ocorreu um erro ao fazer login, verifique as credenciais'
                )
            }
            
        }
    }

    function handleNewAccount(){
        navigation.navigate('SignUpFirstStep')
    }

    return (
        
                <Container>
                    <StatusBar 
                        backgroundColor='transparent'
                        barStyle='light-content'
                        translucent
                    />
                    <Content>
                        <Logo source={Sexfit_logo} />

                        <KeyboardAvoidingView behavior='position' enabled style={{width: '100%'}}>
                            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                                <Form>
                                    <Input 
                                        placeholder='E-mail'
                                        iconName='mail'
                                        onChangeText={setEmail}
                                        value={email}
                                        autoCapitalize='none'
                                        autoCorrect={false}
                                        />
                                    <PasswordInput 
                                        placeholder='Senha'
                                        iconName='lock'
                                        onChangeText={setPassword}
                                        value={password}
                                        />
                                </Form>
                            </TouchableWithoutFeedback>
                        </KeyboardAvoidingView>                    

                        <Footer>
                            <Button 
                                title='Login' 
                                activeOpacity={0.7} 
                                onPress={handleSignIn}
                            />
                            <ForgetContainer>
                                <Forget>Esqueci minha senha</Forget>
                            </ForgetContainer>
                        </Footer>

                        <BottomFooter>
                            <SignUp activeOpacity={0.7} onPress={handleNewAccount}>
                                <Icon name="log-in" size={23} color={colors.main}/>
                                <SignUpTitle> Criar Conta </SignUpTitle>
                            </SignUp>
                        </BottomFooter>
                    </Content>
                </Container>
            
    );
}