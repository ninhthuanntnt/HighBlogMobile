import React from "react";
import {Caption, Card, Text, Title, TouchableRipple} from "react-native-paper";
import CardContent from "react-native-paper/src/components/Card/CardContent";
import {View} from "react-native";
import CardActions from "react-native-paper/src/components/Card/CardActions";
import TagList from "../TagList/TagList";
import {useNavigation} from "@react-navigation/native";
import UserCardTitle from "../UserCardTitle/UserCardTitle";

function CommentItem({comment}) {
    console.log(comment);
    let navigation = useNavigation();
    return (
        <Card>
            <UserCardTitle user={comment.user}/>
            <CardContent>
                <TouchableRipple onPress={
                    () => {}
                }>
                    <View>
                        <Title>{comment.title}</Title>
                        <Text>{comment.content}</Text>
                        <Caption
                            style={{textAlign: "right"}}>{new Date(comment.createdDate).toDateString()}</Caption>
                    </View>
                </TouchableRipple>
            </CardContent>
            <CardActions style={{paddingBottom: 0}}>
                <TagList tags={comment.tags}/>
            </CardActions>
        </Card>
    )
}

export default CommentItem;
