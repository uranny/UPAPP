import { SafeAreaView, Text, StyleSheet, FlatList, Dimensions, View, Image, Pressable, TextStyle} from 'react-native';
import React, {useRef, useState, useCallback} from "react";
import { useFocusEffect } from '@react-navigation/native';
import { CustomText } from '../custom/customText';

interface BannerProps{
    bannerArray : Banner[]
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
                    let nextIndex = (prevIndex + 1) % bannerArray.length
                    if(nextIndex === 0){
                        flatUseRef.current?.scrollToIndex({
                            index: nextIndex,
                            animated: false
                        })
                        setTimeout(() => {
                            flatUseRef.current?.scrollToIndex({
                                index: 1,
                                animated: true
                            })
                        })
                        nextIndex = 1
                        console.log(`from ${prevIndex} to ${nextIndex}`);
                    } else {
                        flatUseRef.current?.scrollToIndex({ 
                            index: nextIndex,
                            animated: true 
                        })
                        console.log(`from ${prevIndex} to ${nextIndex}`);
                    }
                    return nextIndex
                })
            }, 5000)
            console.log(`현재 ${index}`);
            return () => {
                if(intervalRef.current != null){
                    clearInterval(intervalRef.current)
                }
                intervalRef.current = null
            }
        }, [index, isTouched])
    );

    return (
        <View>
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
                <Pressable
                    onPressIn={() => setTouched(true)}
                    onPressOut={() => setTouched(false)}>
                    <View style={[styles.bannerContainer, {width : screenWidth}]}>
                        <Image source={{uri : item.img}} style={[styles.img, {width : screenWidth}]} />
                        <View style={[styles.textContainer, {width : screenWidth}]}>
                            <CustomText style={styles.owner}>
                                {item.owner}
                            </CustomText>
                            <CustomText style={styles.title}>
                                {item.title}
                            </CustomText>
                        </View>
                        <CustomText style={styles.period}>
                            {`신청기간 : ${item.startTime} ~ ${item.lastTime}`}
                        </CustomText>
                    </View>
                </Pressable>
            )}/>
        </View>
    )
}

const commonContainerStyle = {
    height : 200,
    borderRadius : 10,
}

const commonTextStyle : TextStyle = {
    position : "absolute",
    fontWeight : "bold",
    color : "#ffffff",
}

const styles = StyleSheet.create({
    flatLst : {
        marginTop : 24,
        marginLeft : 16,
        marginRight : 16,
        marginBottom : 16
    },

    bannerContainer : {
        ...commonContainerStyle,
        backgroundColor : 'rgb(146, 146, 146)',
        borderStyle : 'solid',
        alignItems : 'center',
        justifyContent : 'center',
    },

    textContainer : {
        ...commonContainerStyle,
        position : 'absolute',
        backgroundColor : 'rgba(0, 0, 0, 0.6)',
    },

    img : {
        ...commonContainerStyle,
        position : 'relative',
    },

    title : {
        ...commonTextStyle,
        fontSize : 20,
        bottom : 40,
        left : 16,
        paddingRight : 16
    },

    period : {
        ...commonTextStyle,
        fontSize : 12,
        bottom : 24,
        left : 16,
        paddingRight : 16
    },

    owner : {
        ...commonTextStyle,
        fontSize : 16,
        top : 16,
        right : 16
    }
})

export default Banner;