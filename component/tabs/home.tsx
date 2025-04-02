import {StyleSheet, ScrollView, Text, View} from 'react-native';
import React, {useState, useCallback} from 'react';
import Banner from '../banner/banner'; 
import { useFocusEffect } from 'expo-router';
import { Announcement } from '../ announcement/ announcement';

// dummyData
import { normalLst } from '@/data/dummy';
import { rallyLst } from '@/data/dummy';
import { jobLst } from '@/data/dummy';
import { communityLst } from '@/data/dummy';

export default function HomeScreen(){

    useFocusEffect(
        useCallback(() => {
        }, [])
    );

    return (
        <View style={styles.screenContainer}>
            <ScrollView
            showsVerticalScrollIndicator = {false}>
                <Banner bannerArray={normalLst}/>
                <Announcement title='대회안내' rallyLst={rallyLst}/>
                <Announcement title='구인공고' jobLst={jobLst}/>
                <Announcement title='커뮤니티' communityLst={communityLst}/>
            </ScrollView>
        </View> 
    );
}

const styles = StyleSheet.create({
    screenContainer : {
        flex : 1,
        backgroundColor: '#f5f5f5'
    },

    titleContainer : {
        marginStart : 16,
        marginEnd : 16,
        marginTop : 28,
        flexDirection: 'row',
        justifyContent : "space-between",
        alignItems : "flex-end"
    },

    title : {
        fontSize : 20,
        fontWeight : 'bold'
    },
    moreTxt : {
        fontSize : 16,
        fontWeight : 'normal',
        color : '#7F7F7F'
    }
})