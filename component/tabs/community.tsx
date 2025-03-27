import { SafeAreaView, StyleSheet, Text} from 'react-native';

export default function CommunityScreen(){
    return (
        <SafeAreaView style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Text>커뮤니티당</Text>
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