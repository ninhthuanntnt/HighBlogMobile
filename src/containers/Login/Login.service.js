import ApiUtil from "../../utils/ApiUtil";
import SecureStorageUtil from "../../utils/SecureStorageUtil";

export const loginAndStoreToken = async (data) => {
    let res = await ApiUtil.login("/api/v1/auth/login", {
        username: data.username,
        password: data.password,
    });

    if (res) {
        await SecureStorageUtil.setAccessToken(res.data['accessToken']);
        await SecureStorageUtil.setRefreshToken(res.data['refreshToken']);
    }

}

export const getProfile = async () => {
    return await ApiUtil.get("/api/v1/profiles");
}
