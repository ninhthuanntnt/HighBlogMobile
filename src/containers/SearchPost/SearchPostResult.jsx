import React from "react";
import {View} from "react-native";
import {Text} from "react-native-paper";
import PostList from "../../components/PostList/PostList";
import PostItem from "../../components/PostItem/PostItem";

function SearchPostResult({route}) {
    return(
        <View>
            <View>
                <PostList url={`/api/v1/posts/search?keyword=${route.params.searchText}`}
                          renderItem={(item)=>(
                              <PostItem post={item.item}/>
                          )}/>
            </View>
        </View>
    );
}

export default SearchPostResult;
