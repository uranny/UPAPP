import { JobPost } from "@/type/job/job"
import { RallyPost } from "@/type/rally/rally"
import { StyleSheet, View, Image, Text, Pressable } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { Category } from "@/type/enum/category"
import { isRallyPost } from "../ announcement/ announcement"
import { CustomText } from "@/component/custom/customText"
import React from "react"

interface PostViewProps {
    rallyPost ?: RallyPost
    jobPost ?: JobPost
    announcement ?: boolean
}

export const PostView = (props : PostViewProps) => {

    const getItem = () => 
    [props.rallyPost, props.jobPost]
    .find(post => post !== undefined) 
    ?? {
        id : 0,
        title : "stac1",
        category : Category.lit, 
        startTime : "2024.10.16",
        endTime : "2025.10.16", 
        owner : "SK Planet", 
        img : "https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/09/HTTP-%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%90%E1%85%A9%E1%84%8F%E1%85%A9%E1%86%AF.png?w=512&ssl=1"
    } as RallyPost
    
    const item = getItem()

    const announcementStyle = () => {
        if(props.announcement === true){
            return {
                width : 300,
                height : 160
            }
        } else {
            return
        }
    }

    return (
        <View style={[styles.mainContainer, announcementStyle()]}>
            <Image 
            source={{uri : item.img}} 
            style={[styles.imgContainer,  announcementStyle()]}/>
            <View style={[styles.textContainer,  announcementStyle()]}>
                <View style={styles.categoryContainer}>
                    <CustomText style={styles.categoryTxt}>{item.category}</CustomText>
                </View>
                <View style={styles.viewContainer}>
                    <View style={styles.textWrapper}>
                        <CustomText style={styles.titleTxt}>
                            {item.title}
                        </CustomText>
                        <CustomText style={styles.subTxt}>
                            {isRallyPost(item) ? `접수기간 : ${item.startTime} ~ ${item.endTime}` : `주요 업무 : ${item.task}`}
                        </CustomText>
                        <CustomText style={styles.ownerTxt}>
                            {item.owner}
                        </CustomText>
                    </View>
                    <Pressable style={styles.iconBtn} onPress={() => {}}>
                        <Icon name={false ? "heart" : "heart-outline"} size={28} color={"white"}/>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const commonContainerStyle = {
    borderRadius : 12
}

const styles = StyleSheet.create({
    mainContainer : {
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
        alignItems : "flex-start"
    },
    textWrapper : {
        flex : 1,
        flexShrink : 1
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