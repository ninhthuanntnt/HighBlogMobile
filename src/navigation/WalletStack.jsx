import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Wallet from "../containers/Wallet/Wallet";

const Stack = createStackNavigator();
export default function WalletStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={"Wallet"} component={Wallet}/>
        </Stack.Navigator>
    );
}
