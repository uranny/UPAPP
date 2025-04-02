import {StyleSheet, ScrollView, Text, View} from 'react-native';
import React, {useState, useCallback} from 'react';
import Banner from '../banner/banner'; 
import { useFocusEffect } from 'expo-router';
import { Category } from '@/type/enum/category';
import { RallyPost } from '@/type/rally/rally';
import { Announcement } from '../ announcement/ announcement';
import { JobPost } from '@/type/job/job';
import { CommunityPost } from '@/type/community/community';
import { CommunityCategory } from '@/type/enum/communityCategory';

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
        title : "stac2dsafafasivgnrehyivungeiunvgeiuwnhvgieuwhnv",
        category : Category.lit, 
        startTime : "2024.10.16",
        endTime : "2025.10.16", 
        owner : "SK Planet", 
        img : "https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/09/HTTP-%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%90%E1%85%A9%E1%84%8F%E1%85%A9%E1%86%AF.png?w=512&ssl=1"
        },
        {id : 1,
        title : "stac2",
        category : Category.lit, 
        startTime : "2024.10.16", 
        endTime : "2025.10.16", 
        owner : "SK Planet", 
        img : "https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/09/HTTP-%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%90%E1%85%A9%E1%84%8F%E1%85%A9%E1%86%AF.png?w=512&ssl=1"
        },
    ]

    const jobLst : JobPost[] = [
        {id : 0,
        title : "stac2",
        category : Category.lit,
        task : "dsaf",
        owner : "몰라", 
        img : "https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/09/HTTP-%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%90%E1%85%A9%E1%84%8F%E1%85%A9%E1%86%AF.png?w=512&ssl=1"
        },
        {id : 1,
        title : "stac1",
        category : Category.lit,
        task : "dsaf",
        owner : "몰라", 
        img : "https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/09/HTTP-%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%90%E1%85%A9%E1%84%8F%E1%85%A9%E1%86%AF.png?w=512&ssl=1"
        },
    ]

    const communityLst : CommunityPost[] = [
        {
            id : 0,
            title : "커뮤니티당",
            category : CommunityCategory.announcement,
            time : "2025.04.01",
            owner : "나당",
            comment : ["", ""]
        },
        {
            id : 1,
            title : "커뮤니티당2",
            category : CommunityCategory.announcement,
            time : "2025.04.01",
            owner : "나당",
            comment : []
        },
        {
            id : 2,
            title : "커뮤니티당3",
            category : CommunityCategory.announcement,
            time : "2025.04.01",
            owner : "나당",
            comment : [""]
        },{
            id : 3,
            title : "커뮤니티당",
            category : CommunityCategory.announcement,
            time : "2025.04.01",
            owner : "나당",
            comment : ["", ""]
        },
        {
            id : 4,
            title : "커뮤니티당2",
            category : CommunityCategory.announcement,
            time : "2025.04.01",
            owner : "나당",
            comment : []
        },
        {
            id : 5,
            title : "커뮤니티당3",
            category : CommunityCategory.announcement,
            time : "2025.04.01",
            owner : "나당",
            comment : [""]
        },
    ]

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