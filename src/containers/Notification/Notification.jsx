import React from "react";
import {View} from "react-native";
import PostList from "../../components/PostList/PostList";
import PostItem from "../../components/PostItem/PostItem";
import RequiredLogin from "../RequeredLogin/RequiredLogin";
import LoginedView from "../../components/LoginedView/LoginedView";
import NotificationItem from "../../components/NotificationItem/NotificationItem";


function Notification({navigation}) {
    return (
        <View style={{height: "100%"}}>
            <LoginedView fallBackComponent={(<RequiredLogin navigation={navigation}/>)}>
                <PostList url={"/api/v1/user/notifications"}
                          renderItem={(item)=>(
                              <NotificationItem notification={item.item}/>
                          )}/>
            </LoginedView>
        </View>
    )
}

export default Notification;
