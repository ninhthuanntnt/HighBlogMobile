import React, {useEffect, useState} from "react";
import {ScrollView, View} from "react-native";
import {getUserInfo, uploadAvatar, uploadBackgroud, uploadBackground} from "./Personal.service";
import {Button, Card, Colors, List} from "react-native-paper";
import CardContent from "react-native-paper/src/components/Card/CardContent";
import ListItem from "react-native-paper/src/components/List/ListItem";
import PostList from "../../components/PostList/PostList";
import PostItem from "../../components/PostItem/PostItem";
import PersonalHeader from "./PersonalHeader";
import ApiUtil from "../../utils/ApiUtil";
import {useDispatch} from "react-redux";


function Personal({navigation, route}) {

    let nickName = route.params.nickName;
    let [userInfo, setUserInfo] = useState(null);
    let [isLoadedMore, setIsLoadedMore] = useState(false);
    let dispatch = useDispatch();

    useEffect(() => {
        getUserInfo(nickName)
            .then(res => {
                setUserInfo(res);
            });
    }, []);

    let updateBackground = (uri) => {
        uploadBackground(uri).then(res => {
            setUserInfo({...userInfo, backgroundPath: res.url});
        });
    }

    let updateAvatar = (uri) => {
        uploadAvatar(uri).then(res => {
            setUserInfo({...userInfo, imagePath: res.url});

        });
    }

    let moreInfo = null;
    if (isLoadedMore) {
        moreInfo = (
            <>
                <List.Item
                    title={userInfo.websiteUrl}
                    left={props => <List.Icon {...props} icon="web"/>}
                />
                <List.Item
                    title={userInfo.location}
                    left={props => <List.Icon {...props} icon="map-marker-outline"/>}
                />
                <List.Item
                    title={userInfo.genderType}
                    left={props => <List.Icon {...props}
                                              icon={userInfo.gender === "FEMALE" ? "gender-female" : "gender-male"}/>}
                />
            </>
        )
    }

    return (
        <View
            showsVerticalScrollIndicator={true}>
            {
                userInfo ?
                    (<>
                        <PostList url={`/api/v1/posts?nickName=${userInfo.nickName}&categoryId=1`}
                                  listHeaderComponent={
                                      <ScrollView>
                                          <PersonalHeader userInfo={userInfo}
                                                          uploadBackground={updateBackground}
                                                          uploadAvatar={updateAvatar}
                                          />
                                          <View>
                                              <Card style={{
                                                  elevation: 0,
                                                  borderTopWidth: 10,
                                                  borderBottomWidth: 10,
                                                  borderColor: Colors.grey200
                                              }}>
                                                  <CardContent>
                                                      <List.Section title="Introduce">
                                                          <ListItem title={userInfo.bio}/>
                                                          <List.Item
                                                              title={new Date(userInfo.createdDate).toDateString()}
                                                              left={props => <List.Icon {...props} icon="candle"/>}
                                                          />
                                                          <List.Item
                                                              title={`${userInfo.numberOfFollowers} followers`}
                                                              left={props => <List.Icon {...props}
                                                                                        icon="account-multiple-plus-outline"/>}
                                                          />
                                                          {moreInfo}
                                                          <List.Item
                                                              title={(
                                                                  <Button
                                                                      onPress={() => setIsLoadedMore(!isLoadedMore)}>
                                                                      {isLoadedMore ? "Collapse..." : "Load more..."}
                                                                  </Button>)}/>

                                                      </List.Section>
                                                  </CardContent>
                                              </Card>
                                          </View>
                                      </ScrollView>
                                  }
                                  renderItem={(item) => (
                                      <PostItem post={item.item}/>
                                  )}/>
                    </>) :
                    <></>
            }
        </View>
    )
}

export default Personal;
