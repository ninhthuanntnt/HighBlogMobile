import React, {useEffect, useState} from "react";
import {FlatList, View} from "react-native";
import {fetchList, fetchListPostBy} from "./PostList.service";
import {ActivityIndicator, Card, Colors, Divider, Text} from "react-native-paper";
import {OptimizedFlatList} from "react-native-optimized-flatlist";
import CardContent from "react-native-paper/src/components/Card/CardContent";

//TODO: Rename
function PostList({url, listHeaderComponent, renderItem, isPagination = true}) {
    let [refreshing, setRefreshing] = useState(false);
    let [listPosts, setListPosts] = useState(null);
    let [staticState, setStaticState] = useState({page: 1})

    useEffect(
        () => {
            staticState.page = 1;
            if (isPagination)
                fetchListPostBy(url, staticState.page).then(listData => {
                    setListPosts(listData);
                });
            else
                fetchList(url).then(listData => {
                    setListPosts(listData)
                })
        }, [url]);

    const appendData = () => {
        if (listPosts === null)
            listPosts = [];
        fetchListPostBy(url, staticState.page + 1)
            .then(listData => {
                listData.forEach(data => listPosts.push(data))
                setListPosts(listPosts);
                staticState.page += 1;
            });
    }

    const resetData = () => {
        if (isPagination)
            fetchListPostBy(url, 1).then(data => {
                setListPosts(data);
                staticState.page = 1;
            });
        else
            fetchList(url).then(data => {
                setListPosts(data);
            })
    }

    //TODO: research about virtual list for best performance
    let listEmptyComponent = null;
    if (listPosts !== null) {
        if (listPosts)
            listEmptyComponent = (
                <Card mode={"outlined"}>
                    <CardContent>
                        <Text style={{textAlign: "center"}}>
                            Nothing to show
                        </Text>
                    </CardContent>
                </Card>
            )
    }
    return (
        <View style={{height: "100%"}}>
            <OptimizedFlatList data={listPosts}
                               keyExtractor={(item, index) => index.toString()}
                               ListHeaderComponent={listHeaderComponent}
                               renderItem={renderItem}
                               refreshing={refreshing}
                               onRefresh={resetData}
                               ItemSeparatorComponent={() => (<Divider/>)}
                               onEndReachedThreshold={10}
                               onEndReached={isPagination ? appendData : () => {
                               }}
                               ListEmptyComponent={listEmptyComponent}
                               removeClippedSubviews={true}
                               maxToRenderPerBatch={5}
                               ListFooterComponent={listPosts === null
                                   ? <ActivityIndicator animating={true}
                                                        color={Colors.red800}/>
                                   : <></>
                               }
                               showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

export default PostList;
