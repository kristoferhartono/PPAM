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

const Signup = () =>{
        const [hidePassword, setHidePassword] = useState(true);
    return(
        <StyledContainer>
            <StatusBar style="dark" /> 
            <InnerContainer>                
                <PageLogo pageSignup={true} resizeMode="contain" source={require('./../assets/img/logo.png')} />
                <PageTitle >Let's get started!</PageTitle>                 
                <Formik
                    initialValues={{name: '', email: '', phone:'', password: '', confirmPassword: ''}}
                    onSubmit={(values)=> {
                        console.log(values);
                    }}
                >{({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                    <MyTextInput
                        label="Name"
                        icon="person"
                        placeholder="Name"
                        placeholderTextColor={yellow}
                        onChangeText = {handleChange('name')}
                        onBlur= {handleBlur('name')}
                        value = {values.name}
                    />
                    <MyTextInput
                        label="Email"
                        icon="mail"
                        placeholder="Email"
                        placeholderTextColor={yellow}
                        onChangeText = {handleChange('email')}
                        onBlur= {handleBlur('email')}
                        value = {values.email}
                    />
                    <MyTextInput
                        label="Phone"
                        icon="device-mobile"
                        placeholder="Phone"
                        placeholderTextColor={yellow}
                        onChangeText = {handleChange('phone')}
                        onBlur= {handleBlur('phone')}
                        value = {values.phone}
                    />
                                       
                    <MyTextInput
                        label="Password"
                        icon="lock"
                        placeholder="Password"
                        placeholderTextColor={yellow}
                        onChangeText = {handleChange('password')}
                        onBlur= {handleBlur('password')}
                        value = {values.password}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                    />
                    
                    <MyTextInput
                        label="Confirm Password"
                        icon="lock"
                        placeholder="Confirm Password"
                        placeholderTextColor={yellow}
                        onChangeText = {handleChange('confirmPassword')}
                        onBlur= {handleBlur('confirmPassword')}
                        value = {values.confirmPassword}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                    />

                    <MsgBox>...</MsgBox>
                    <StyledButton pageSignup={true} onPress={handleSubmit}>
                        <ButtonText>
                            Sign Up
                        </ButtonText>
                    </StyledButton>
                    <Line pageSignup={true}/>
                    
                    <ExtraView>
                        <ExtraText pageSignup={true}>
                            Already have an account?  </ExtraText>
                        <TextLink>
                            <TextLinkContent>
                                Signup here!
                            </TextLinkContent>
                        </TextLink>
                    </ExtraView>
                </StyledFormArea>)}                

                </Formik>            
            </InnerContainer>

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

export default Signup;