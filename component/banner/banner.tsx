import { SafeAreaView, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import React, {useRef, useState, useCallback} from "react";
import { useFocusEffect } from '@react-navigation/native';

export default function Banner() {
    const flatUseRef = useRef<FlatList>(null)
    const normalLst = ["홈이당1", "홈이당2", "홈이당3", "홈이당4", "홈이당5", "홈이당1"];
    const [index, setIndex] = useState(0);
    const screenWidth = Dimensions.get('window').width - 32; // 현재 화면의 너비 가져오기
    const slideSecond = () => {
        if (index == normalLst.length-1){
            return 0
        }
        return 2000
    }

    // last Index일때 처음으로 돌아가기
    useFocusEffect(
        useCallback(() => {
            const interval = setInterval(() => {
                console.log(`interval 들어옴, 현재 ${index}`);
                setIndex((prevIndex) => {
                    const nextIndex = (prevIndex + 1) % normalLst.length
                    if(prevIndex == normalLst.length-1){
                        flatUseRef.current?.scrollToIndex({ 
                            index: nextIndex, 
                            animated: false 
                        })
                    } else{
                        flatUseRef.current?.scrollToIndex({ 
                            index: nextIndex,
                            animated: true 
                        })
                    }
                    console.log(`from ${prevIndex} to ${nextIndex}`);
                    return nextIndex
                })
            }, index === normalLst.length - 1 ? 0 : 2000)
            return () => clearInterval(interval)
        }, [])
    );

    return (
        <SafeAreaView>
            <FlatList
            style={styles.flatLst}
            ref={flatUseRef}
            data={normalLst}
            horizontal
            keyExtractor={(_, i) => (i.toString())}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            contentContainerStyle={{gap:20}}
            renderItem={({item}) => (
                <SafeAreaView style={[styles.view, {width : screenWidth}]}>
                    <Text style={styles.text}>{item}</Text>
                </SafeAreaView>
            )}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    flatLst : {
        marginTop : 24,
        marginLeft : 16,
        marginRight : 16,
    },
    view : {
        height:200,
        backgroundColor : 'rgb(255, 99, 99)',
        borderColor : '#000000',
        borderStyle : 'solid',
        borderWidth : 1,
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 10
    },
    text : {
    }
})