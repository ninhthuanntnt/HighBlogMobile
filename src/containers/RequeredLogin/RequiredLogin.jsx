import React from "react";
import {View, ViewComponent} from "react-native";
import {Button, Text, Title} from "react-native-paper";

function RequiredLogin({navigation}){
    return (
        <View style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%"
        }}>
            <Title style={{marginBottom: 40}}>Please login to get the best experience</Title>
            <Button mode={"outlined"}
                    onPress={()=>navigation.navigate("LoginStack")}>
                Login
            </Button>
        </View>
    )
}

export default RequiredLogin;
