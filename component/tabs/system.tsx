import { SafeAreaView, Text} from 'react-native';

export default function SystemScreen(){
    return (
        <SafeAreaView style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Text>시스템이당</Text>
        </SafeAreaView>
    );
}