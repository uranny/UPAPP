import { SafeAreaView, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import Banner from '../banner/banner';

export default function HomeScreen(){
    const flatUseRef = useRef<FlatList>(null)
    const lst = ["홈이당1", "홈이당2", "홈이당3", "홈이당4", "홈이당5", "홈이당6", "홈이당7", "홈이당8", "홈이당9"];
    const [index, setIndex] = useState(0);
    const screenWidth = Dimensions.get('window').width - 32; // 현재 화면의 너비 가져오기

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % lst.length
                flatUseRef.current?.scrollToIndex({ index: nextIndex, animated: true })
                console.log(`인덱스 바뀜 ${nextIndex}`);
                return nextIndex
            })
        }, 5000)
        return () => clearInterval(interval)
    }, [lst])

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
            style={styles.flatLst}
            ref={flatUseRef}
            data={lst}
            horizontal
            keyExtractor={(_, i) => (i.toString())}
            scrollEnabled={false}
            renderItem={({item}) => (
                <SafeAreaView style={[styles.view, {width : screenWidth}]}>
                    <Text style={styles.text}>{item}</Text>
                </SafeAreaView>
            )}
            showsHorizontalScrollIndicator={false}/>
        </SafeAreaView> 
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: '#f5f5f5'
    },
    flatLst : {
        marginTop : 24,
        marginLeft : 16,
        marginRight : 16,
    },
    view : {
        height:200,
        backgroundColor : 'rgb(255, 99, 99)',
        borderColor : '#000000',
        borderStyle : 'solid',
        borderWidth : 1,
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 10
    },
    text : {
    }
})