import React from "react"
import { StyleSheet, Text, TextProps } from "react-native"

interface CustomTextProps extends TextProps {
    children : React.ReactNode;
}

export const CustomText = ({children, style, ...props} : CustomTextProps) => {
    return (
        <Text numberOfLines={1} ellipsizeMode='tail' style={[style, styles.defaultTxt]}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    defaultTxt : {
        fontFamily : "pretendard_medium"
    }
})