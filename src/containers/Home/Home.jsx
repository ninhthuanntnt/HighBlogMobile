import React from "react";
import {View} from "react-native";
import PostList from "../../components/PostList/PostList";
import PostItem from "../../components/PostItem/PostItem";

function Home({title, navigation}) {
    return (
        <View>
            <PostList url={"/api/v1/posts?categoryId=1"}
            renderItem={(item)=>(
                <PostItem post={item.item}/>
            )}/>
        </View>
    )
}

export default Home;
