import { CommunityPost } from "@/type/community/community";
import { JobPost } from "@/type/job/job";
import { RallyPost } from "@/type/rally/rally";
import { useState } from "react";
import { PostType } from "@/type/postType";
import { View, Text, FlatList, ActivityIndicator, StyleSheet} from "react-native";
import { AnnouncementPost } from "./post/postView";

interface AnnouncementProps {
    title : string,
    rallyLst ?: RallyPost[]
    jobLst ?: JobPost[]
    communityLst ?: CommunityPost[]
}

export const isRallyPost = (item : PostType) : item is RallyPost=> {
    return "startTime" in item
}

export const isCommunityPost = (item : PostType) : item is CommunityPost => {
    return "comment" in item
}

export const Announcement = (props : AnnouncementProps) => {
    const [loading, setLoading] = useState(true)
    const getData = () => [props.rallyLst, props.jobLst, props.communityLst].find(lst => lst?.length) ?? [];
    const baseLst = getData()
    return (
        <>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.moreTxt}>더보기</Text>
            </View>
            <FlatList<PostType>
            style = {{paddingStart : 16, paddingEnd : 16, marginTop : 16, marginBottom : 16}}
            horizontal = {isCommunityPost(baseLst[0]) ? false : true}
            scrollEnabled={isCommunityPost(baseLst[0]) ? false : true}
            data={baseLst}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{gap:isCommunityPost(baseLst[0]) ? 8 : 16}}
            onEndReached={() => {
                if(loading){return}
                console.log("로딩 true됨")
                setLoading(true)
                setTimeout(()=>{
                    console.log("로딩 false됨")
                    setLoading(false)
                }, 10000)
            }}
            // onEndReachedThreshold={0.5}
            // ListFooterComponent={loading ? <ActivityIndicator style={{marginEnd : 12}} size={24} color="#000000" /> : null}
            renderItem={({item}) => (
                isCommunityPost(item) ? 
                <AnnouncementPost communityPost={item}/> : 
                isRallyPost(item) ? 
                <AnnouncementPost rallyPost={item}/> :
                <AnnouncementPost jobPost={item}/>
            )}/>
        </>
    );
}

const styles = StyleSheet.create({
    titleContainer : {
        marginStart : 16,
        marginEnd : 16,
        marginTop : 24,
        flexDirection: 'row',
        justifyContent : "space-between",
        alignItems : "flex-end"
    },
    title : {
        fontSize : 16,
        fontWeight : 'bold'
    },
    moreTxt : {
        fontSize : 12,
        fontWeight : 'normal',
        color : '#7F7F7F'
    }
})