import React from "react";
import {View} from "react-native";
import PostList from "../../components/PostList/PostList";
import PostItem from "../../components/PostItem/PostItem";
import RequiredLogin from "../RequeredLogin/RequiredLogin";
import LoginedView from "../../components/LoginedView/LoginedView";


function Favorite({navigation}) {
    return (
        <View style={{height: "100%"}}>
            <LoginedView fallBackComponent={(<RequiredLogin navigation={navigation}/>)}>
                <PostList url={"/api/v1/user/favorite-posts"}
                          renderItem={(item)=>(
                              <PostItem post={item.item}/>
                          )}/>
            </LoginedView>
        </View>
    )
}

export default Favorite;
