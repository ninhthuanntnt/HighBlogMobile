import React, {useEffect} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import MainStack from "./MainStack";
import LoginStack from "./LoginStack";
import SettingStack from "./SettingStack";
import SearchStack from "./SearchStack";
import {MainHeaderRight} from "../components/MainHeaderRight/MainHeaderRight";
import PostDetailStack from "./PostDetailStack";
import RegisterStack from "./RegisterStack";
import {PreferencesContext} from "../config/PreferencesContext";
import {IconButton, Title} from "react-native-paper";
import HorizontalView from "../components/HorizontalView/HorizontalView";
import SearchHeader from "../components/SearchHeader/SearchHeader";
import PersonalStack from "./PersonalStack";
import ImageStack from "./ImageStack";
import {getProfile} from "../containers/Login/Login.service";
import {useDispatch} from "react-redux";
import {setUserData} from "../redux/actions/userDataAction";
import WalletStack from "./WalletStack";


const Stack = createStackNavigator();

export default function ApplicationNavigator() {

    const {toggleTheme, isThemeDark} = React.useContext(PreferencesContext);

    let dispatch = useDispatch();

    useEffect(() => {
            getProfile()
                .then(res => dispatch(setUserData(res)))
        },
        []);

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

            <Stack.Screen name={"PersonalStack"}
                          component={PersonalStack}
                          options={({route}) => (
                              {title: '@' + route.params.params.nickName}
                          )}/>

            <Stack.Screen name={"WalletStack"}
                          component={WalletStack}
                          options={{title: "Wallet"}}/>

            <Stack.Screen name={"SearchStack"}
                          component={SearchStack}
                          options={{
                              headerTitle: () => (<SearchHeader/>)
                          }}/>
            <Stack.Screen name={"ImageStack"}
                          component={ImageStack}
                          options={{title: "Image"}}/>
        </Stack.Navigator>
    );
}
