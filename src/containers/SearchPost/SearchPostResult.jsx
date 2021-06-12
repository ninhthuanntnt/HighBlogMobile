import React from "react";
import {View} from "react-native";
import PostList from "../../components/PostList/PostList";
import PostItem from "../../components/PostItem/PostItem";

function SearchPostResult({route}) {
    return (
        <View style={{height: "100%"}}>
            <PostList url={`/api/v1/posts/search?keyword=${route.params.searchText}`}
                      renderItem={(item) => (
                          <PostItem post={item.item}/>
                      )}/>
        </View>
    );
}

export default SearchPostResult;
