import * as React from "react";
import { rainbow } from "rainbow-colors-array-ts";
import {View, Text, StyleProp, ViewStyle} from "react-native";

interface RainbowContainerProps {
    rainbowContainerStyle?: StyleProp<ViewStyle>,
    lineColorStyle?: StyleProp<ViewStyle>,
    amount: number,
}




const Rainbow = ({rainbowContainerStyle, amount, lineColorStyle} : RainbowContainerProps) => {
    const colors = rainbow(amount, "hex", true);

    return (
        <View style={rainbowContainerStyle}>
           {
            colors.map((color) => (
                <View key={color.hex} style={[{backgroundColor: color.hex}, lineColorStyle]}></View>
            ))
           }
        </View>
    )
}

export default Rainbow;

