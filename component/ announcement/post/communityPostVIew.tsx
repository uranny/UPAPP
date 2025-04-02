import { CustomText } from "@/component/custom/customText"
import { CommunityPost } from "@/type/community/community"
import { Pressable, StyleSheet, TextStyle, View } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"


interface CommunityAnnouncementPostProps {
    post : CommunityPost
}

export const CommunityAnnouncementPost = 
({post} : CommunityAnnouncementPostProps) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.textContainer}>
                <CustomText style={styles.titleTxt}>{post.title}</CustomText>
                <View style={styles.lstTextContainer}>
                    <CustomText style={styles.categoryTxt}>{post.category}</CustomText>
                    <CustomText style={styles.timeTxt}>{post.time}</CustomText>
                    <CustomText style={styles.ownerTxt}>{post.owner}</CustomText>
                </View>
            </View>
            <View style={styles.commentContainer}>
                <CustomText style={styles.commentTxt}>{post.comment.length}</CustomText>
            </View>
        </View>
    )
}

const subTxtStyles : TextStyle = {
    color : "#7F7F7F",
    fontSize : 12,
    fontWeight : "bold"
}

const styles = StyleSheet.create({
    mainContainer : {
        backgroundColor : "rgb(255, 255, 255)",
        borderRadius : 8,
        flexDirection : "row",
        paddingHorizontal : 16,
        paddingVertical : 16,
        justifyContent : "space-between",
        gap : 16
    },
    textContainer : {
        flex : 1,
        flexShrink : 1,
        gap  :8
    },
    commentContainer : {
        alignContent : "center",
        justifyContent : "center",
        marginEnd : 8
    },
    lstTextContainer : {
        flexDirection : "row",
        gap : 8
    },
    titleTxt : {
        fontSize : 16,
        fontWeight : "normal"
    },
    categoryTxt : {
        ...subTxtStyles,
    },
    timeTxt : {
        ...subTxtStyles
    },
    ownerTxt : {
        ...subTxtStyles
    },
    commentTxt : {
        ...subTxtStyles
    }
})