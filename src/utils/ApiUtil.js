import AxiosConfig from "../config/AxiosConfig";
import SecureStorageUtil from "./SecureStorageUtil";

class ApiUtil {
    static async #appendAuthorizationToHeader(headers) {
        let accessToken = await SecureStorageUtil.getAsync("accessToken");
        headers["Authorization"] = accessToken ? `Bearer ${accessToken}` : ``;
    }

    static async post(url, body, headers = {}) {
        await this.#appendAuthorizationToHeader(headers);

        let response = await AxiosConfig.post(url, body, {
            headers,
            withCredentials: true
        });
        console.log(response);
        return response;

    }

    static async get(url, params = {}, headers = {}) {
        await this.#appendAuthorizationToHeader(headers);

        let response = await AxiosConfig.get(url, {params, headers, withCredentials: true});

        return await response.data;
    }

    static async put(url, body, headers = {}) {
        await this.#appendAuthorizationToHeader(headers);

        let response = await AxiosConfig.put(url, body, {
            headers,
            withCredentials: true
        });
        console.log(response);
        return response;

    }

    static async delete(url, body, params = {}, headers = {}) {
        await this.#appendAuthorizationToHeader(headers);

        let response = await AxiosConfig.delete(url, {data: body, params, headers, withCredentials: true});

        return await response.data;
    }

    static async login(url, body) {
        let response = await AxiosConfig.post(url, body, {
            withCredentials: true
        });
        console.log(response);
        return response;

    }

    // static async get(url) {
    //
    //     return await get(url, null);
    // }
    //
    // static async post(url, body) {
    //
    //     return await post(url, null, body);
    // }

}

export default ApiUtil;
