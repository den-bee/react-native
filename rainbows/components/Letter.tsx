import { View, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import { rainbow } from "rainbow-colors-array-ts";

interface LetterProps {
    letterStyle?: StyleProp<TextStyle>,
    letter: string,
}

const Letter = ({letterStyle, letter} : LetterProps) => {

    return (
        <Text style={letterStyle}>{letter}</Text>
    )
}

export default Letter;