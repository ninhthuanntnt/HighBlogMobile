import React from "react";
import {View} from "react-native";
import {Button, Text, TextInput} from "react-native-paper";
import {Controller, useForm} from "react-hook-form";
import {getProfile, loginAndStoreToken} from "./Login.service";
import {useDispatch} from "react-redux";
import {setUserData} from "../../redux/actions/userDataAction";

export default function Login({navigation}) {

    const dispatch = useDispatch();
    const {control, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = data => {
        async function submit(data) {
            await loginAndStoreToken(data);
            let userData = await getProfile();

            dispatch(setUserData(userData));

            navigation.navigate("MainStack");
        }

        submit(data).then(r => console.log(r));
    };

    return (
        <View>
            <Text>
                Login page
            </Text>

            <Controller control={control}
                        render={({field: {onChange, onBlur, value}}) => (
                            <TextInput mode="outlined"
                                       label="Username"
                                       placeholder="Type something"
                                       onBlur={onBlur}
                                       onChangeText={value => onChange(value)}
                                       value={value}
                            />
                        )}
                        name={"username"}
                        rules={{required: true}}
                        defaultValue=""/>
            {errors.username && (<Text>This is required.</Text>)}

            <Controller control={control}
                        render={({field: {onChange, onBlur, value}}) => (
                            <TextInput mode="outlined"
                                       label="Password"
                                       placeholder="Type something"
                                       onBlur={onBlur}
                                       onChangeText={value => onChange(value)}
                                       value={value}
                                       secureTextEntry={true}
                            />
                        )}
                        name={"password"}
                        rules={{required: true}}
                        defaultValue=""/>
            {errors.password && (<Text>This is required.</Text>)}
            <Button onPress={handleSubmit(onSubmit)}>
                Login
            </Button>
            <Button onPress={() => navigation.navigate("RegisterStack")}>
                Goto register
            </Button>
        </View>
    );
}
