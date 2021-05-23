import React from "react";
import {View} from "react-native";
import PostItem from "../../components/PostItem/PostItem";
import PostList from "../../components/PostList/PostList";


function Question() {
    return (
        <View>
            <PostList url={"/api/v1/posts?categoryId=2"}
                      renderItem={(item) => (
                          <PostItem post={item.item}/>
                      )}/>
        </View>
    )
}

export default Question;
