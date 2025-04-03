import { useState } from "react";
import { Platform, Pressable, ScrollView, StyleSheet, TextInput, View } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

interface SearchBoxProps{
    onClick : (txt : string) => void;
}


export const SearchBox = ({onClick} : SearchBoxProps) => {
    const [searchTxt, setSearchTxt] = useState("")
    return(
        <View style={styles.mainContainer}>
            <View style={styles.textInputBox}>
                <TextInput 
                value={searchTxt}
                onChangeText={(txt) => {setSearchTxt(txt)}}
                autoCapitalize="none"
                style={styles.textInput} 
                placeholder="검색어를 입력해주세요"/>
            </View>
            <Pressable 
            style={styles.iconBox} 
            onTouchStart={() => {console.log("터치함")}}
            onTouchEnd={() => {
                onClick(searchTxt)
                setSearchTxt("")
            }}
            >
                <Icon name="search" size={24} color={"black"}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer : {
        backgroundColor : "rgb(255, 255, 255)",
        paddingHorizontal : 20,
        paddingVertical  : Platform.select({ios : 16, android : 8}),
        flexDirection : "row",
        marginHorizontal : 16,
        marginTop : 16,
        borderRadius : 8,
        justifyContent : "space-between"
    },
    textInputBox : {
        flex:1
    },
    textInput : {
        fontSize : 16,
    },
    iconBox : {
        justifyContent : "center",
        marginStart : 12
    }
})