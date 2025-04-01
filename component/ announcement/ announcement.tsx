import { CommunityPost } from "@/type/community/community";
import { JobPost } from "@/type/job/job";
import { RallyPost } from "@/type/rally/rally";
import { useState } from "react";
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet, TextStyle, Pressable} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"

interface NotificationProps {
    title : string,
    rallyLst ?: RallyPost[]
    jobLst ?: JobPost[]
    communityLst ?: CommunityPost[]
}

export const Announcement = (props : NotificationProps) => {

    const [loading, setLoading] = useState(true)
    const [idLst, setIdLst] = useState<number[]>([])

    const getData = () => {
        return 
    }

    const iconTouch = (id : number) => {
        if (idLst.includes(id)){
            idLst.splice(idLst.indexOf(id), 1)
        } else {
            idLst.push(id)
        }
    }

    return (
        <>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
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
                <View style={styles.boardContainer}>
                    <Image source={{uri : item.img}} style={styles.imgContainer}/>
                    <View style={styles.textContainer}>
                        <View style={styles.categoryContainer}>
                            <Text style={styles.categoryTxt}>{item.category}</Text>
                        </View>
                        <View style={styles.viewContainer}>
                            <View>
                                <Text style={styles.titleTxt}>{item.title}</Text>
                                <Text style={styles.subTxt}>{`접수기간 : ${item.startTime} ~ ${item.endTime}`}</Text>
                                <Text style={styles.ownerTxt}>{item.owner}</Text>
                            </View>
                            <Pressable style={styles.iconBtn} onPress={() => {iconTouch(item.id)}}>
                                <Icon name={idLst.includes(item.id) ? "heart" : "heart-outline"} size={28} color={"white"}/>
                            </Pressable>
                        </View>
                    </View>
                </View>
            )}/>
        </>
    );
}

const commonContainerStyle = {
    borderRadius : 12,
    width : 300,
    height : 160
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
    },
    boardContainer : {
        ...commonContainerStyle,
        backgroundColor : 'rgb(146, 146, 146)'
    },
    imgContainer : {
        ...commonContainerStyle,
        position : "relative"
    },
    textContainer : {
        ...commonContainerStyle,
        backgroundColor : "rgba(0, 0, 0, 0.6)",
        position : "absolute",
        justifyContent : "space-between",
        flex: 1
    },
    categoryContainer : {
        alignSelf: 'flex-end',
        marginTop : 8,
        marginEnd : 8,
        borderRadius : 12,
        paddingTop : 6,
        paddingBottom : 6,
        paddingStart : 24,
        paddingEnd : 24,
        backgroundColor : "rgba(255, 255, 255, 0.8)"
    },
    categoryTxt : {
        color : "rgba(0, 0, 0, 0.8)"
    },
    viewContainer : {
        bottom : 12,
        flexDirection : "row",
        paddingStart : 12,
        paddingEnd : 12,
        justifyContent : "space-between",
    },
    iconBtn : {
        alignSelf : "flex-end",
    },
    
    titleTxt : {
        color : "rgb(255,255, 255)",
        fontSize : 20,
        fontWeight : "bold"
    },

    subTxt : {
        color : "#D6D6D6",
        fontSize : 12,
    },
    
    ownerTxt : {
        color : "#D6D6D6",
        fontSize : 12,
    }
})