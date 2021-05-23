import * as SecureStore from 'expo-secure-store';

class SecureStorageUtil {
    static ACCESS_TOKEN_KEY = "accessToken";
    static REFRESH_TOKEN_KEY = "accessToken";

    static async getAsync(key) {
        return await SecureStore.getItemAsync(key)
    }

    static async setAsync(key, value) {
        await SecureStore.setItemAsync(key, value);
    }

    static async getAccessToken() {
        return SecureStore.getItemAsync(this.ACCESS_TOKEN_KEY);
    }

    static async setAccessToken(value) {
        await SecureStore.setItemAsync(this.ACCESS_TOKEN_KEY, value);
    }

    static async getRefreshToken() {
        return SecureStore.getItemAsync(this.REFRESH_TOKEN_KEY);
    }

    static async setRefreshToken(value) {
        await SecureStore.setItemAsync(this.REFRESH_TOKEN_KEY, value);
    }

    static async clearToken(){
        await SecureStore.deleteItemAsync(this.ACCESS_TOKEN_KEY);
        await SecureStore.deleteItemAsync(this.REFRESH_TOKEN_KEY);
    }
}

export default SecureStorageUtil;
