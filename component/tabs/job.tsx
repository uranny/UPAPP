import { SafeAreaView, StyleSheet, Text} from 'react-native';

export default function JobScreen(){
    return (
        <SafeAreaView style={styles.container}>
            <Text>구인공고당</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})