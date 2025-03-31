import { CommunityPost } from "@/type/community/community";
import { JobPost } from "@/type/job/job";
import { RallyPost } from "@/type/rally/rally";
import { useState } from "react";
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"

interface NotificationProps {
    rallyLst ?: RallyPost[]
    jobLst ?: JobPost[]
    communityLst ?: CommunityPost[]
}

export const Announcement = (props : NotificationProps) => {

    const [loading, setLoading] = useState(true)

    return (
        <>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>대회안내</Text>
                <Text style={styles.moreTxt}>더보기</Text>
            </View>
            <FlatList
            style = {{paddingStart : 16, marginTop : 12}}
            horizontal
            data={props.rallyLst}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{gap:16}}
            onEndReached={() => {
                if(loading){return}
                console.log("로딩 true됨")
                setLoading(true)
                setTimeout(()=>{
                    console.log("로딩 false됨")
                    setLoading(false)
                }, 10000)
            }}
            onEndReachedThreshold={0.5}
            ListFooterComponent={loading ? <ActivityIndicator style={{marginEnd : 12}} size={24} color="#000000" /> : null}
            renderItem={({item}) => (
                <View>
                    <Image source={{uri : item.img}}/>
                    <View>
                        <View>
                            <Text>{item.category}</Text>
                        </View>
                        <View>
                            <View>
                                <Text>{item.title}</Text>
                                <Text>{`접수기간 : ${item.startTime} ~ ${item.endTime}`}</Text>
                                <Text>{item.owner}</Text>
                            </View>
                            <Icon name={"heart-outline"} size={28} color={"black"}/>
                        </View>
                    </View>
                </View>
            )}/>
        </>
    );
}

const styles = StyleSheet.create({
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