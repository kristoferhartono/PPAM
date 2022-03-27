import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

//formik
import { Formik } from 'formik';

// icon
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    TulisanSignIn,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors,
    StyledButton,
    ButtonText,
    InnerContainerYellow,
    MsgBox,
    Line,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent
}from './../components/styles.js';

import { View } from 'react-native';

//Colors
const {yellow, green} = Colors;

const Signin = () =>{
        const [hidePassword, setHidePassword] = useState(true);
    return(
        <StyledContainer>
            <StatusBar style="dark" /> 
            <InnerContainer>
                <PageTitle >Welcome to</PageTitle>
                <PageLogo resizeMode="contain" source={require('./../assets/img/logo.png')} />
                <SubTitle >Birdiezi Birgizi!</SubTitle>                
            </InnerContainer>

            <InnerContainerYellow>
            <TulisanSignIn>Sign In</TulisanSignIn>
                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values)=> {
                        console.log(values);
                    }}
                >{({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                    <MyTextInput
                        label="Email"
                        icon="mail"
                        placeholder="type your email"
                        placeholderTextColor={yellow}
                        onChangeText = {handleChange('email')}
                        onBlur= {handleBlur('email')}
                        value = {values.email}
                    />

                    <MyTextInput
                        label="Password"
                        icon="lock"
                        placeholder="type your password"
                        placeholderTextColor={yellow}
                        onChangeText = {handleChange('password')}
                        onBlur= {handleBlur('password')}
                        value = {values.password}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                    />
                    
                    <MsgBox>...</MsgBox>
                    <StyledButton onPress={handleSubmit}>
                        <ButtonText>
                            Sign In
                        </ButtonText>
                    </StyledButton>
                    <Line />
                    <View style = {{flexDirection:'row'}}>
                        <StyledButton google={true} onPress={handleSubmit}>
                                <Fontisto name="google" color={yellow} size = {20} />
                            <ButtonText google={true}>
                                Sign in with Google
                            </ButtonText>                                                   
                        </StyledButton>

                        <StyledButton facebook={true} onPress={handleSubmit}>
                                <Fontisto name="facebook" color={yellow} size = {20} />
                            <ButtonText facebook={true}>
                                Sign in with Facebook
                            </ButtonText>                        
                        </StyledButton>
                    </View>

                    <ExtraView>
                        <ExtraText>
                            Don't have an account?  </ExtraText>
                        <TextLink>
                            <TextLinkContent>
                                Signup here!
                            </TextLinkContent>
                        </TextLink>
                    </ExtraView>
                </StyledFormArea>)}
                

                </Formik>
            </InnerContainerYellow>
        </StyledContainer>
    )
}

const MyTextInput = ({label, icon, isPassword,hidePassword, setHidePassword, ...props}) => {
    return(
        <View>
           <LeftIcon>
               <Octicons name={icon} size={30} color={yellow} />
               </LeftIcon> 
            <StyledInputLabel>
                {label}
            </StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={yellow}/>
                </RightIcon>
            )}
        </View>
    )
}

export default Signin;