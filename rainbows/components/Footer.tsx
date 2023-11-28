import { StyleProp, ViewStyle, View } from "react-native";
import Letter from "./Letter";
import Rainbow from "./Rainbow";
import { rainbow } from "rainbow-colors-array-ts";

interface FooterProps {
    footerContainerStyle?: StyleProp<ViewStyle>,
}

const Footer = ({footerContainerStyle} : FooterProps) => {
    const word = "RAINBOW";
    const colors = rainbow(7, "hex", true);

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