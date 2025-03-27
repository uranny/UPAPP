import { SafeAreaView, Text, StyleSheet, FlatList, Dimensions, TouchableWithoutFeedback} from 'react-native';
import React, {useRef, useState, useCallback} from "react";
import { useFocusEffect } from '@react-navigation/native';

interface BannerProps{
    bannerArray : string[]
}

const Banner = ({bannerArray} : BannerProps) => {
    const flatUseRef = useRef<FlatList>(null)
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
    const [index, setIndex] = useState(0);
    const [isTouched, setTouched] = useState(false)
    const screenWidth = Dimensions.get('window').width - 32; // 현재 화면의 너비 가져오기

    useFocusEffect(
        useCallback(() => {
            if(isTouched) return;
            intervalRef.current = setInterval(() => {
                console.log(`interval 들어옴, 현재 ${index}`);
                setIndex((prevIndex) => {
                    const nextIndex = (prevIndex + 1) % bannerArray.length
                    flatUseRef.current?.scrollToIndex({ 
                        index: nextIndex,
                        animated: true 
                    })
                    console.log(`from ${prevIndex} to ${nextIndex}`);
                    return nextIndex
                })
                console.log(`현재 ${index}`);
            }, 5000)
            return () => {
                clearInterval(intervalRef.current)
            }
        }, [index, isTouched])
    );

    return (
        <SafeAreaView>
            <FlatList
            style={styles.flatLst}
            ref={flatUseRef}
            data={bannerArray}
            horizontal
            keyExtractor={(_, i) => (i.toString())}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            contentContainerStyle={{gap:20}}
            renderItem={({item}) => (
                <TouchableWithoutFeedback
                    onPressIn={() => {
                        setTouched(true)
                    }}
                    onPressOut={() => {
                        setTouched(false)
                    }}>
                    <SafeAreaView style={[styles.view, {width : screenWidth}]}>
                        <Text style={styles.text}>{item}</Text>
                    </SafeAreaView>
                </TouchableWithoutFeedback>
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

export default Banner;