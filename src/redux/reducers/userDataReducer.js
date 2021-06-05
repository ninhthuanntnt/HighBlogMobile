import {CLEAR_USER_DATA, SET_NEW_USER_AVATAR, SET_USER_DATA} from "../constants/UserActionType";

export const userDataReducer = (state = null, action)=>{
    switch (action.type){
        case SET_USER_DATA:
            return action.data;
        case CLEAR_USER_DATA:
            return null;
        case SET_NEW_USER_AVATAR:
            return {...state, imagePath: action.imagePath}
        default:
            return state;
    }
}
