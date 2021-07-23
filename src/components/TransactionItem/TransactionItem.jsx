import React from "react";
import {View} from "react-native";
import {Card, Subheading, Text} from "react-native-paper";
import CardContent from "react-native-paper/src/components/Card/CardContent";
import {TransactionTypeColor} from "../../constants/TransactionTypeColor";

function TransactionItem({transaction}) {
    return (
        <View>
            <Card>
                <CardContent style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <View>
                        <Subheading style={{color: TransactionTypeColor[transaction.paymentType]}}>
                            {transaction.paymentType} {transaction.id}
                        </Subheading>
                        <Text>{new Date(transaction.createdDate).toLocaleString()}</Text>
                    </View>
                    <View>
                        <Text style={{fontWeight: "700"}}>{transaction.amount} USD</Text>
                    </View>
                </CardContent>
            </Card>
        </View>
    )
}

export default TransactionItem;