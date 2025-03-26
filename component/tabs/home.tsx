import { SafeAreaView, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import React, {useState, useEffect, useRef, useCallback} from 'react';
import SliderBanner from '../banner/banner';

export default function HomeScreen(){

    return (
        <SafeAreaView style={styles.container}>
            <SliderBanner normalLst={["", ""]}/>
        </SafeAreaView> 
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: '#f5f5f5'
    }
})