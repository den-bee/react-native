import * as React from "react";
import { rainbow } from "rainbow-colors-array-ts";
import {View, Text, StyleProp, ViewStyle} from "react-native";

interface RainbowContainerProps {
    rainbowContainerStyle?: StyleProp<ViewStyle>,
    lineColorStyle?: StyleProp<ViewStyle>,
    colors: string[],
}

const Rainbow = ({rainbowContainerStyle, colors, lineColorStyle} : RainbowContainerProps) => {
   
    return (
        <View style={rainbowContainerStyle}>
           {
            colors.slice(0,6).map((color) => (
                <View key={color} style={[{backgroundColor: color}, lineColorStyle]}></View>
            ))
           }
        </View>
    )
}

export default Rainbow;

