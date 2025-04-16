import { StyleSheet, FlatList} from 'react-native';
import { SearchBox } from '../search/seachBox';
import { PostView } from '../post/postView';
import { jobLst } from '@/data/dummy';

export default function JobScreen(){
    const getLst = (txt : string) => {
        console.log(`${txt} 서치 호출`)
    }
    return (
        <>
            <SearchBox onClick={getLst}/>
            <FlatList
            style = {styles.mainContainer}
            data={jobLst}
            showsVerticalScrollIndicator = {false}
            contentContainerStyle = {
                {
                    gap : 16,
                    paddingBottom : 16
                }
            }
            renderItem={({item}) => (
                <PostView jobPost={item} announcement={false}/>
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