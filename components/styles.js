import styled from 'styled-components';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants  from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

// colors
export const Colors = {
    orange: '#FF914D',
    green: '#1F8A70',
    yellow: '#FEE7AE',
    white: '#F9F9F9',
    chocolate: '#7C5142'
  };

const { orange, green, yellow, white, chocolate } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 10px;
  padding-top: ${StatusBarHeight }px;
  background-color: ${Colors.green};
`;

export const InnerContainer = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
`;
export const InnerContainerYellow = styled.View`
  width: 100%;
  flex: 1.6;
  align-items: center;
  border-radius: 20px;
  background-color: ${Colors.yellow}
`;
export const PageLogo = styled.Image`
  width: 150px;
  height: 150px;

  ${(props) => props.pageSignup == true && `
  width: 100px;
  height: 100px;
  `}
`;

export const PageTitle = styled.Text`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  color: ${Colors.white};
  padding: 10px;
`;

export const SubTitle = styled.Text`
  font-size: 12px;
  text-align: center;
  font-weight: normal;
  font-style: italic;
  color: ${Colors.white};
  padding: 10px;
`;

export const TulisanSignIn = styled.Text`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  color: ${Colors.chocolate};
  padding: 10px;
`;

export const StyledFormArea = styled.View`
  width: 90%;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${white};
  padding: 10px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 20px;
  font-size: 12px;
  height: 40px;
  margin-vertical: 5px;
  margin-bottom: 10px;
  color: ${yellow};
`;

export const StyledInputLabel = styled.Text`
  color: ${green};
  font-size: 13px;
  text-align: left;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 25px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 25px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: ${green};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-vertical: 2px;
  height: 40px;

  ${(props) => props.google == true && `
  flex-direction:row;
  width: 50%;
  justify-content: space-evenly;
  `}

  ${(props) => props.facebook == true && `
  flex-direction:row;
  width: 50%;
  justify-content: space-evenly;
  `}

  ${(props) => props.pageSignup == true && `
  background-color: ${orange};
  `}
`;


export const ButtonText = styled.Text`
  color: ${white};
  font-size: 12px;

  ${(props) => props.google == true && `
  padding: 2px;
  `}

  ${(props) => props.facebook == true && `
  padding: 2px;
  `}
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${green};
  margin-vertical: 10px;

  ${(props) => props.pageSignup == true && `
  background-color: ${yellow};
  `}
`;

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${green};
  font-size: 15px;

  ${(props) => props.pageSignup == true && `
  color: ${yellow};
  `}
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled.Text`
  color: ${orange};
  font-size: 15px;
`;