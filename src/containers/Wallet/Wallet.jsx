import React, {useEffect, useState} from "react";
import {ScrollView, View} from "react-native";
import {Caption, Card, Chip, DataTable, Text, Title} from "react-native-paper";
import {CardTitle} from "react-native-paper/src/components/Card/CardTitle";
import CardContent from "react-native-paper/src/components/Card/CardContent";
import {fetchUserTransactions, getWalletInfo} from "./WalletService";
import PostList from "../../components/PostList/PostList";
import TransactionItem from "../../components/TransactionItem/TransactionItem";

function Wallet({route}) {
    let userId = route.params.userId;

    let [page, setPage] = useState(0);
    let [wallet, setWallet] = useState({});
    let [userTransactions, setUserTransactions] = useState({});

    useEffect(() => {
        getWalletInfo().then(setWallet);
    }, []);

    return (
        <View style={{height: "100%"}}>
            <Card>
                <CardTitle title={"Balance"} subtitle={"(USD)"}/>
                <CardContent>
                    <Title>{wallet.balance}$</Title>
                </CardContent>
            </Card>
            <Title style={{marginHorizontal: 10}}>Transaction history</Title>
            <PostList url={"/api/v1/user/user-transactions"}
                      renderItem={(item) => <TransactionItem transaction={item.item}/>}/>
        </View>
    )

}

export default Wallet;