import { FlatList, StyleSheet} from 'react-native';
import { SearchBox } from '../search/seachBox';
import { PostView } from '../post/postView';
import { communityLst } from '@/data/dummy';
import { CommunityPostView } from '../post/communityPostVIew';

export default function CommunityScreen(){
    const getLst = (txt : string) => {
        console.log(`${txt} 서치 호출`)
    }
    return (
        <>
            <SearchBox onClick={getLst}/>
            <FlatList
            style = {styles.mainContainer}
            data={communityLst}
            showsVerticalScrollIndicator = {false}
            contentContainerStyle = {
                {
                    gap : 16,
                    paddingBottom : 16
                }
            }
            renderItem={({item}) => (
                <CommunityPostView post={item}/>
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