import { StyleProp, ViewStyle, View } from "react-native";
import Letter from "./Letter";
import Rainbow from "./Rainbow";
import { rainbow } from "rainbow-colors-array-ts";

interface FooterProps {
    footerContainerStyle?: StyleProp<ViewStyle>,
    text: string
}

const Footer = ({footerContainerStyle, text} : FooterProps) => {
    const word = text;
    const colors = rainbow(word.length, "hex", true);

    return (
        <View style={footerContainerStyle}>
            {
                word.split("").map((letter, index) => (
                    <Letter letter={letter} letterStyle={{color: colors[index].hex, fontSize: 30, paddingTop: 10}}></Letter>
                ))
            }
        </View>
    )
}

export default Footer;