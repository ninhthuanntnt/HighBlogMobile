import ApiUtil from "../../utils/ApiUtil";

export const fetchListPostBy = async (url, page, pageSize=20)=>{
    let res = await ApiUtil.get(url, {page, pageSize});
    return res.items;
}

export const fetchList = async (url)=>{
    let res = await ApiUtil.get(url);
    return res;
}
