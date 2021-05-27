import React, {useEffect, useState} from "react";
import {Linking, ScrollView, View} from "react-native";
import {Button, Caption, Card, IconButton, Title} from "react-native-paper";
import {
    addToFavorite,
    createPostVote,
    deleteFromFavorite,
    deletePostVote,
    getPostDetail,
    updatePostVote
} from "./PostDetail.service";
import CardContent from "react-native-paper/src/components/Card/CardContent";
import HTML from "react-native-render-html";
import CardActions from "react-native-paper/src/components/Card/CardActions";
import LoginedView from "../../components/LoginedView/LoginedView";
import HorizontalView from "../../components/HorizontalView/HorizontalView";
import {VoteType} from "../../constants/VoteType";
import UserCardTitle from "../../components/UserCardTitle/UserCardTitle";
import TagList from "../../components/TagList/TagList";

export default function PostDetail({navigation, route}) {

    let postId = route.params.postId
    let [postDetail, setPostDetail] = useState(null);

    let [voteType, setVoteType] = useState(null);
    let [addedToFavorite, setAddedToFavorite] = useState(false);

    useEffect(() => {
        getPostDetail(postId)
            .then(result => {
                console.log(result);
                setPostDetail(result);
                setVoteType(result.vote ? result.vote.voteType : null);
                setAddedToFavorite(result.addedToFavorite);
            });
    }, []);

    const openLinkInBrowser = (event, url, attrs) => {

        let isSupported = Linking.canOpenURL(url);
        if (isSupported) {
            Linking.openURL(url);
        } else {
            alert("Url isn't supported");
        }
    }

    const updateVote = (newVoteType) => {
        if (voteType === null) {
            createPostVote(postId, newVoteType).then(() => setVoteType(VoteType.UP));
        } else if (voteType !== newVoteType) {
            updatePostVote(postId, newVoteType).then(() => setVoteType(newVoteType));
        } else {
            deletePostVote(postId).then(() => setVoteType(null));
        }
    }

    const switchAddedToFavorite = () => {
        if (addedToFavorite)
            deleteFromFavorite(postId).then(() => setAddedToFavorite(false));
        else
            addToFavorite(postId).then(() => setAddedToFavorite(true));
    }

    // TODO: Create IconWithOutlineCondition to minify

    return (
        <>
            {postDetail ?
                <View style={{flex: 1}}>
                    <ScrollView style={{background: "white"}}>
                        <Card>
                            <UserCardTitle user={postDetail.user}/>
                            <CardContent>
                                <Title style={{fontSize: 33}}>
                                    {postDetail.title}
                                </Title>
                            </CardContent>
                            <CardContent>
                                <HorizontalView style={{justifyContent: "space-between"}}>
                                    <Caption>
                                        {new Date(postDetail.createdDate).toDateString()}
                                    </Caption>
                                    <HorizontalView>
                                        <Caption style={{marginHorizontal: 5}}>
                                            {postDetail.numberOfVotes} votes
                                        </Caption>
                                        <Caption
                                            style={{marginHorizontal: 5}}>
                                            {postDetail.numberOfComments} comments
                                        </Caption>
                                        <Caption
                                            style={{marginHorizontal: 5}}>
                                            {postDetail.numberOfFavorites} saved
                                        </Caption>
                                    </HorizontalView>
                                </HorizontalView>
                            </CardContent>
                            <CardActions>
                                <TagList tags={postDetail.tags}/>
                            </CardActions>
                            <CardContent>
                                <HTML source={{html: '<div style="font-size: 1.55em">' + postDetail.content + '</div>'}}
                                      onLinkPress={openLinkInBrowser}
                                      ignoredStyles={["font-family"]}
                                />
                            </CardContent>
                        </Card>
                    </ScrollView>
                    <View>
                        <Card>
                            <CardActions style={{justifyContent: "space-between"}}>
                                <HorizontalView>
                                    <IconButton icon={"facebook"}/>
                                    <IconButton icon={"twitter"}/>
                                </HorizontalView>
                                <Button onPress={() => {
                                    navigation.navigate("Comment", {postId})
                                }}>
                                    Comment
                                </Button>
                                <HorizontalView>
                                    <LoginedView fallBackComponent={
                                        <Button onPress={() => navigation.navigate("LoginStack")}>
                                            Login for best experience
                                        </Button>
                                    }>
                                        <IconButton
                                            icon={`chevron-up-circle${voteType === VoteType.UP ? "" : "-outline"}`}
                                            onPress={() => updateVote(VoteType.UP)}/>
                                        <IconButton
                                            icon={`chevron-down-circle${voteType === VoteType.DOWN ? "" : "-outline"}`}
                                            onPress={() => updateVote(VoteType.DOWN)}/>
                                        <IconButton icon={`heart${addedToFavorite ? "" : "-outline"}`}
                                                    color={"#e93b81"}
                                                    onPress={switchAddedToFavorite}
                                        />
                                    </LoginedView>
                                </HorizontalView>
                            </CardActions>
                        </Card>
                    </View>
                </View>
                : <></>}
        </>
    );
}
