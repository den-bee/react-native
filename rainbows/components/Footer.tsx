import { StyleProp, ViewStyle, View } from "react-native";
import Letter from "./Letter";
import Rainbow from "./Rainbow";
import { rainbow } from "rainbow-colors-array-ts";

interface FooterProps {
    footerContainerStyle?: StyleProp<ViewStyle>,
    text: string,
    colors: string[]
}

const Footer = ({footerContainerStyle, text, colors} : FooterProps) => {
    const word = text.slice(0, 10);
    
    return (
        <View style={footerContainerStyle}>
            {
                word.split("").map((letter, index) => (
                    <Letter key={index} letter={letter} letterStyle={{color: colors[index], fontSize: 30, paddingTop: 10}}></Letter>
                ))
            }
        </View>
    )
}

export default Footer;