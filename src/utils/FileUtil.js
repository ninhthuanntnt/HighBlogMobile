class FileUtil {
    static getFileInfo(uri) {
        const lastIndexOfDot = uri.lastIndexOf(".");
        const fileType = uri.substring(lastIndexOfDot);
        const lastIndexOfSlash = uri.lastIndexOf("/");
        const fileName = uri.substring(lastIndexOfSlash);

        return {
            fileName,
            fileType
        }
    }
}
export default FileUtil;
