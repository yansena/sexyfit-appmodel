import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

import {
  Container,
  Content,
  Logo,
  Form,
  Footer,
  BottomFooter,
  BackSignIn,
  Icon,
  BackTitle,
} from "./styles";

import Sexfit_logo from "../../../assets/sexyfit_logo.png";

import { Input } from "../../../components/Input";
import { PasswordInput } from "../../../components/PasswordInput";
import { Button } from "../../../components/Button";
import { useTheme } from "styled-components";

export function SignUpFirstStep() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { colors } = useTheme();
  return (
    <Container>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <Content>
        <Logo source={Sexfit_logo} />

        <KeyboardAvoidingView
          behavior="position"
          enabled
          style={{ width: "100%" }}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Form>
              <Input
                placeholder="Nome"
                iconName="user"
                onChangeText={setName}
                value={name}
                autoCorrect={false}
              />
              <Input
                placeholder="E-mail"
                iconName="mail"
                onChangeText={setEmail}
                value={email}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <PasswordInput
                placeholder="Senha"
                iconName="lock"
                onChangeText={setPassword}
                value={password}
              />
              <PasswordInput
                placeholder="Confirmar senha"
                iconName="lock"
                onChangeText={setPassword}
                value={password}
              />
            </Form>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

        <Footer>
          <Button title="Cadastrar" onPress={() => {}} />
        </Footer>

        <BottomFooter>
          <BackSignIn activeOpacity={0.7} onPress={() => {}}>
            <Icon name="chevron-left" size={23} color={colors.main} />
            <BackTitle> Voltar para o login </BackTitle>
          </BackSignIn>
        </BottomFooter>
      </Content>
    </Container>
  );
}
