import { FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import { SearchBox } from '../search/seachBox';
import { rallyLst } from '@/data/dummy';
import { PostView } from '../post/postView';

export default function RallyScreen(){
    const getLst = (txt : string) => {
        console.log(`${txt} 서치 호출`)
    }
    return (
        <>
            <SearchBox onClick={getLst}/>
            <FlatList
            style = {styles.mainContainer}
            data={rallyLst}
            showsVerticalScrollIndicator = {false}
            contentContainerStyle = {
                {
                    gap : 16,
                    paddingBottom : 16
                }
            }
            renderItem={({item}) => (
                <PostView rallyPost={item} announcement={false}/>
            )
            }/>
        </>
    );
}

const styles = StyleSheet.create({
    mainContainer : {
        height : "100%",
        marginHorizontal : 16,
        paddingVertical : 16
    }
})