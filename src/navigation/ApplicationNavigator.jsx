import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import MainStack from "./MainStack";
import LoginStack from "./LoginStack";
import DefaultAvatar from "../assets/default_avatar.png";
import SettingStack from "./SettingStack";
import ProfileStack from "./ProfileStack";
import SearchStack from "./SearchStack";
import {TextInput, View} from "react-native";
import {Avatar, Button} from "react-native-paper";
import {MainHeaderRight} from "../components/MainHeaderRight/MainHeaderRight";
import PostDetailStack from "./PostDetailStack";
import RegisterStack from "./RegisterStack";


const Stack = createStackNavigator();

export default function ApplicationNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"MainStack"}
                          component={MainStack}
                          options={({navigation}) => (
                              {
                                  title: "HighBlog",
                                  headerRight: () => (
                                      <MainHeaderRight navigation={navigation}/>
                                  )
                              }
                          )}/>

            <Stack.Screen name={"LoginStack"}
                          component={LoginStack}
                          options={{title: "Login"}}/>

            <Stack.Screen name={"RegisterStack"}
                          component={RegisterStack}
                          options={{title: "Register"}}/>

            <Stack.Screen name={"PostDetailStack"}
                          component={PostDetailStack}
                          options={{title: "Post detail"}}/>

            <Stack.Screen name={"SettingStack"}
                          component={SettingStack}
                          options={{title: "Settings"}}/>

            <Stack.Screen name={"ProfileStack"}
                          component={ProfileStack}
                          options={({route}) => ({title: route.params.nickName})}/>

            <Stack.Screen name={"SearchStack"}
                          component={SearchStack}
                          options={{
                              headerTitle: () => (
                                  <>
                                      <TextInput placeholder={"Search..."}/>
                                  </>
                              )
                          }}/>
        </Stack.Navigator>
    );
}
