import ApiUtil from "../../utils/ApiUtil";

export const fetchListPostBy = async (url, page, pageSize=10)=>{
    let res = await ApiUtil.get(url, {page, pageSize});
    return res.items;
}
