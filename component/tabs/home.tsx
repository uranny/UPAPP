import { SafeAreaView, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import React, {useState, useEffect, useRef, useCallback} from 'react';
import SliderBanner from '../banner/banner';
import { useFocusEffect } from 'expo-router';


export default function HomeScreen(){
    const normalLst = ["홈이당0", "홈이당1", "홈이당2", "홈이당3"];

    useFocusEffect(
        useCallback(() => {
        }, [])
    );

    return (
        <SafeAreaView style={styles.container}>
            <SliderBanner bannerArray={normalLst}/>
        </SafeAreaView> 
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: '#f5f5f5'
    }
})