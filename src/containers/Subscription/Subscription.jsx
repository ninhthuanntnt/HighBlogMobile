import React from "react";
import {View} from "react-native";
import PostItem from "../../components/PostItem/PostItem";
import PostList from "../../components/PostList/PostList";
import LoginedView from "../../components/LoginedView/LoginedView";
import RequiredLogin from "../RequeredLogin/RequiredLogin";

function Subscription({navigation}) {
    return (
        <View>
            <LoginedView fallBackComponent={(<RequiredLogin navigation={navigation}/>)}>
                <PostList url={"/api/v1/user/posts/subscriptions?categoryId=1"}
                          renderItem={(item)=>(
                              <PostItem post={item.item}/>
                          )}/>
            </LoginedView>
        </View>
    )
}

export default Subscription;
