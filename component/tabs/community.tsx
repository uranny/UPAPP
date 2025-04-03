import { View, StyleSheet} from 'react-native';
import { SearchBox } from '../search/seachBox';

export default function CommunityScreen(){
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
    container : {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})