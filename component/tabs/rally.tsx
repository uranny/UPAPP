import { StyleSheet, Text, TextInput, View} from 'react-native';
import { SearchBox } from '../search/seachBox';

export default function RallyScreen(){
    const getLst = (txt : string) => {
        console.log(`${txt} 서치 호출`)
    }
    return (
        <View>
            <SearchBox onClick={getLst}/>
        </View>
    );
}

const styles = StyleSheet.create({
})