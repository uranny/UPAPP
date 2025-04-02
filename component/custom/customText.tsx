import React from "react"
import { Text, TextProps } from "react-native"

interface CustomTextProps extends TextProps {
    children : React.ReactNode;
}

export const CustomText = ({children, style, ...props} : CustomTextProps) => {
    return (
        <Text numberOfLines={1} ellipsizeMode='tail' style={style}>
            {children}
        </Text>
    )
}