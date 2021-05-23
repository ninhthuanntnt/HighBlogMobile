import {CLEAR_USER_DATA, SET_USER_DATA} from "../constants/UserActionType";
import SecureStorageUtil from "../../utils/SecureStorageUtil";

export const setUserData = (userData) => {
    return {
        type: SET_USER_DATA,
        data: userData,
    }
}

export const clearUserData = () => {
    return {
        type: CLEAR_USER_DATA
    }
}
