import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import MainStack from "./MainStack";
import LoginStack from "./LoginStack";
import SettingStack from "./SettingStack";
import ProfileStack from "./ProfileStack";
import SearchStack from "./SearchStack";
import {TextInput, View} from "react-native";
import {MainHeaderRight} from "../components/MainHeaderRight/MainHeaderRight";
import PostDetailStack from "./PostDetailStack";
import RegisterStack from "./RegisterStack";
import {PreferencesContext} from "../config/PreferencesContext";
import {IconButton, Switch, Title} from "react-native-paper";
import HorizontalView from "../components/HorizontalView/HorizontalView";


const Stack = createStackNavigator();

export default function ApplicationNavigator() {

    const {toggleTheme, isThemeDark} = React.useContext(PreferencesContext);

    return (
        <Stack.Navigator>
            <Stack.Screen name={"MainStack"}
                          component={MainStack}
                          options={({navigation}) => (
                              {
                                  headerTitle: () => (
                                      <HorizontalView style={{alignItems: "center"}}>
                                          <Title>HIGH BLOG</Title>
                                          {isThemeDark ?
                                              <IconButton icon={"moon-waning-crescent"}
                                                          color={"yellow"}
                                                          onPress={toggleTheme}/> :
                                              <IconButton icon={"weather-sunny"}
                                                          color={"orange"}
                                                          onPress={toggleTheme}/>}
                                      </HorizontalView>
                                  ),
                                  headerRight: () => (
                                      <MainHeaderRight navigation={navigation}/>
                                  )
                              }
                          )}/>

            <Stack.Screen name={"LoginStack"}
                          component={LoginStack}
                          options={{
                              title: "Login",
                              headerShown: false
                          }}/>

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
