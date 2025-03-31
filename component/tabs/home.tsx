import {StyleSheet, ScrollView, Text, View} from 'react-native';
import React, {useState, useCallback} from 'react';
import Banner from '../banner/banner'; 
import { useFocusEffect } from 'expo-router';
import { Category } from '@/type/enum/category';
import { RallyPost } from '@/type/rally/rally';
import { Announcement } from '../ announcement/ announcement';

export default function HomeScreen(){
    const normalLst : Banner[] = [
        {title : "stac 사라짐0", startTime : "2024.10.16(월)", lastTime : "2025.10.16(수)", owner  : "SK Planet", img : "https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/09/HTTP-%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%90%E1%85%A9%E1%84%8F%E1%85%A9%E1%86%AF.png?w=512&ssl=1"},
        {title : "stac 사라짐1", startTime : "2024.10.16(월)", lastTime : "2025.10.16(수)", owner  : "SK Planet", img : "https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/09/HTTP-%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%90%E1%85%A9%E1%84%8F%E1%85%A9%E1%86%AF.png?w=512&ssl=1"},
        {title : "stac 사라짐2", startTime : "2024.10.16(월)", lastTime : "2025.10.16(수)", owner  : "SK Planet", img : "https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/09/HTTP-%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%90%E1%85%A9%E1%84%8F%E1%85%A9%E1%86%AF.png?w=512&ssl=1"},
        {title : "stac 사라짐3", startTime : "2024.10.16(월)", lastTime : "2025.10.16(수)", owner  : "SK Planet", img : "https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/09/HTTP-%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%90%E1%85%A9%E1%84%8F%E1%85%A9%E1%86%AF.png?w=512&ssl=1"},
        {title : "stac 사라짐0", startTime : "2024.10.16(월)", lastTime : "2025.10.16(수)", owner  : "SK Planet", img : "https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/09/HTTP-%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%90%E1%85%A9%E1%84%8F%E1%85%A9%E1%86%AF.png?w=512&ssl=1"}
    ];

    const rallyLst : RallyPost[] = [
        {id : 0,
        title : "stac1",
        category : Category.lit, 
        startTime : "2024.10.16(월)",
        endTime : "2025.10.16(월)", 
        owner : "SK Planet", 
        img : "https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/09/HTTP-%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%90%E1%85%A9%E1%84%8F%E1%85%A9%E1%86%AF.png?w=512&ssl=1"},
        {id : 1,
        title : "stac2",
        category : Category.lit, 
        startTime : "2024.10.16(월)", 
        endTime : "2025.10.16(월)", 
        owner : "SK Planet", 
        img : "https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/09/HTTP-%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%90%E1%85%A9%E1%84%8F%E1%85%A9%E1%86%AF.png?w=512&ssl=1"},
        {id : 2,
        title : "stac3",
        category : Category.lit, 
        startTime : "2024.10.16(월)", 
        endTime : "2025.10.16(월)", 
        owner : "SK Planet", 
        img : "https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/09/HTTP-%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%90%E1%85%A9%E1%84%8F%E1%85%A9%E1%86%AF.png?w=512&ssl=1"},
    ]

    useFocusEffect(
        useCallback(() => {
        }, [])
    );

    return (
        <View style={styles.screenContainer}>
            <ScrollView>
                <Banner bannerArray={normalLst}/>
                <Announcement rallyLst={rallyLst}/>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>구인공고</Text>
                    <Text style={styles.moreTxt}>더보기</Text>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>커뮤니티</Text>
                    <Text style={styles.moreTxt}>더보기</Text>
                </View>
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