import React from "react";
import { useContext } from "react";
import { Text, TouchableOpacity } from 'react-native';
import { ThemeContext } from "../Src/Context/ThemeContext";
import { styles } from '../Src/Styles/GlobalStyle';

interface ButtonProps {
    onPress : () => void;
    title : String;
    isBlue ? : Boolean;
    isGray ? : Boolean;
}

export default function Button ({title, onPress, isBlue, isGray} : ButtonProps) {
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity 
            style={
                isBlue 
                ? styles.btnBlue 
                : isGray 
                ? styles.btnGray 
                : theme === "light" 
                ? styles.btnLight 
                : styles.btnDark
            } 
            onPress={onPress}>
            <Text
               style={
                   isBlue || isGray 
                   ? styles.smallTextLight
                   : theme === "dark" 
                   ? styles.smallTextLight 
                   : styles.smallTextDark 
                }
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}