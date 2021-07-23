import ApiUtil from "../../utils/ApiUtil";

export const getWalletInfo = async () => {
    return await ApiUtil.get("/api/v1/user/wallets");
}

export const fetchUserTransactions = async (page, pageSize = 10) => {
    return await ApiUtil.get(`/api/v1/user/user-transactions?page=${page + 1}&pageSize=${pageSize}`);
}