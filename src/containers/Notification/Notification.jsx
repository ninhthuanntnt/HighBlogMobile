import React from "react";
import {View} from "react-native";
import PostList from "../../components/PostList/PostList";
import PostItem from "../../components/PostItem/PostItem";


function Notification() {
    return (
        <View>
            <PostList url={"/api/v1/user/notifications"}
                      renderItem={(item)=>(
                          <PostItem post={item.item}/>
                      )}/>
        </View>
    )
}

export default Notification;
