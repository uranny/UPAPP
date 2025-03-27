import { SafeAreaView, StyleSheet, Text} from 'react-native';

export default function SystemScreen(){
    return (
        <SafeAreaView style={styles.container}>
            <Text>시스템이당</Text>
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