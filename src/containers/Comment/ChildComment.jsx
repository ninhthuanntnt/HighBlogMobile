import React, {useRef, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import CardContent from "react-native-paper/src/components/Card/CardContent";
import {Button, Card, Divider, IconButton} from "react-native-paper";
import {ScrollView, TextInput, View} from "react-native";
import HorizontalView from "../../components/HorizontalView/HorizontalView";
import CardActions from "react-native-paper/src/components/Card/CardActions";
import {addComment} from "./Comment.service";
import CommentCard from "../../components/CommentItem/CommentCard";
import {useSelector} from "react-redux";
import LoginedView from "../../components/LoginedView/LoginedView";

function ChildComment({route}) {
    let navigation = useNavigation();
    let comment = route.params.comment;
    let postId = route.params.postId;
    let [childComments, setChildComments] = useState(comment.childComments || []);
    let userData = useSelector(state => state.userData);
    let [commentText, setCommentText] = useState('');

    let listChildComment = null;
    if (childComments) {
        listChildComment = childComments.map((comment, index) => (
            <Card key={index}>
                <Divider/>
                <CommentCard comment={comment} style={{paddingLeft: 30}}/>
            </Card>
        ));
    }

    let addNewComment = () => {
        if (commentText.length > 0) {
            addComment(postId, comment.id, commentText)
                .then(() => {
                    childComments.unshift({
                        content: commentText,
                        user: userData
                    });
                    let newChildComments = [...childComments];

                    setChildComments(newChildComments);
                    setCommentText('');
                });
        }
    }
    return (
        <>
            <CommentCard comment={comment}/>

            <ScrollView>
                {listChildComment}
            </ScrollView>

            <Card>
                <LoginedView fallBackComponent={(
                    <CardContent>
                        <Button onPress={() => navigation.navigate("LoginStack")}>Login to add comment...</Button>
                    </CardContent>
                )}>
                    <HorizontalView style={{justifyContent: "space-between"}}>
                        <View style={{flex: 1}}>
                            <CardContent style={{borderBottom: "1px solid black"}}>
                                <TextInput placeholder={"Add your comment..."}
                                           onChangeText={(text) => setCommentText(text)}
                                           value={commentText}/>
                            </CardContent>
                        </View>
                        <CardActions>
                            <IconButton icon={"send-circle"} onPress={addNewComment}/>
                        </CardActions>
                    </HorizontalView>
                </LoginedView>
            </Card>
        </>
    )
}

export default ChildComment;
