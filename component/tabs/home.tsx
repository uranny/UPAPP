import { SafeAreaView, StyleSheet, ScrollView, Text, FlatList} from 'react-native';
import React, {useState, useRef, useCallback} from 'react';
import Banner from '../banner/banner';
import { useFocusEffect } from 'expo-router';


export default function HomeScreen(){
    const normalLst : Banner[] = [
        {title : "stac 사라짐0", startTime : "2024.10.16(월)", lastTime : "2025.10.16(수)", owner  : "SK Planet", img : "https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/09/HTTP-%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%90%E1%85%A9%E1%84%8F%E1%85%A9%E1%86%AF.png?w=512&ssl=1"},
        {title : "stac 사라짐1", startTime : "2024.10.16(월)", lastTime : "2025.10.16(수)", owner  : "SK Planet", img : "https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/09/HTTP-%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%90%E1%85%A9%E1%84%8F%E1%85%A9%E1%86%AF.png?w=512&ssl=1"},
        {title : "stac 사라짐2", startTime : "2024.10.16(월)", lastTime : "2025.10.16(수)", owner  : "SK Planet", img : "https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/09/HTTP-%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%90%E1%85%A9%E1%84%8F%E1%85%A9%E1%86%AF.png?w=512&ssl=1"},
        {title : "stac 사라짐3", startTime : "2024.10.16(월)", lastTime : "2025.10.16(수)", owner  : "SK Planet", img : "https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/09/HTTP-%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%90%E1%85%A9%E1%84%8F%E1%85%A9%E1%86%AF.png?w=512&ssl=1"},
        {title : "stac 사라짐0", startTime : "2024.10.16(월)", lastTime : "2025.10.16(수)", owner  : "SK Planet", img : "https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/09/HTTP-%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%90%E1%85%A9%E1%84%8F%E1%85%A9%E1%86%AF.png?w=512&ssl=1"}
    ];

    useFocusEffect(
        useCallback(() => {
        }, [])
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Banner bannerArray={normalLst}/>
                <Text style={styles.title}>대회안내</Text>
                <Text style={styles.title}>구인공고</Text>
                <Text style={styles.title}>커뮤니티</Text>
            </ScrollView>
        </SafeAreaView> 
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: '#f5f5f5'
    },
    title : {
        marginStart : 16,
        marginTop : 24,
        fontSize : 16,
        fontWeight : 'bold'
    }
})