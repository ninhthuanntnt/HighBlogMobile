import React from "react";
import {View} from "react-native";
import {Button, List} from "react-native-paper";
import {useDispatch, useSelector} from "react-redux";
import {clearUserData} from "../../redux/actions/userDataAction";
import LoginedView from "../../components/LoginedView/LoginedView";
import ListItem from "react-native-paper/src/components/List/ListItem";
import ListSection from "react-native-paper/src/components/List/ListSection";
import SecureStorageUtil from "../../utils/SecureStorageUtil";

export default function Setting({navigation}) {
    let dispatch = useDispatch();

    let userData = useSelector(state => state.userData);

    const clearUser = () => {
        SecureStorageUtil.clearToken()
            .then(() => {
                navigation.navigate("Home");
                dispatch(clearUserData());
            });
    }

    return (
        <View>
            <LoginedView>
                <ListSection>
                    <ListItem title={"Personal"}
                              left={() => <List.Icon icon={"account-outline"}/>}
                              onPress={() => navigation.navigate("PersonalStack", {
                                  screen: "Personal",
                                  params: {nickName: userData.nickName}
                              })}/>

                    <ListItem title={"Your wallet"}
                              left={() => <List.Icon icon={"wallet-outline"}/>}/>

                    <ListItem title={"Edit profile"}
                              left={() => <List.Icon icon={"account-edit-outline"}/>}/>

                    <ListItem title={"Logout"}
                              left={() => <List.Icon icon="logout"/>}
                              onPress={clearUser}/>

                    <ListItem title={"Settings"}
                              left={() => <List.Icon icon="hammer-wrench"/>}/>
                </ListSection>
            </LoginedView>
        </View>
    );
}
