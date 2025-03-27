import { SafeAreaView, StyleSheet, Text} from 'react-native';

export default function RallyScreen(){
    return (
        <SafeAreaView style={styles.container}>
            <Text>대회공고당</Text>
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