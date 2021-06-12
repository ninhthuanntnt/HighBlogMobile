import ApiUtil from "../../utils/ApiUtil";
import FileUtil from "../../utils/FileUtil";

const getDataToUpload = (uri) => {
    const {fileName, fileType} = FileUtil.getFileInfo(uri);
    let formData = new FormData();
    formData.append("upload", {
        uri,
        name: fileName,
        type: `image/${fileType}`,
    });

    return formData;
}

export const getUserInfo = async (nickName) => {
    let res = await ApiUtil.get(`/api/v1/users/${nickName}`);

    return res;
}

export const uploadBackground = async (uri) => {
    return await ApiUtil.updateImage("/api/v1/user/background", getDataToUpload(uri));
}

export const uploadAvatar = async (uri) => {
    return await ApiUtil.updateImage("/api/v1/user/avatar", getDataToUpload(uri));
}

export const follow = async (nickName) => {
    return await ApiUtil.post(`/api/v1/user/subscriptions/users/${nickName}`);
}

export const unFollow = async (nickName) => {
    return await ApiUtil.delete(`/api/v1/user/subscriptions/users/${nickName}`);
}

export const switchNotified = async (nickName)=>{
    return await ApiUtil.put(`api/v1/user/subscriptions/users/${nickName}/notified/switch`);
}
