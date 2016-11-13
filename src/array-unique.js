/**
 * Created by wangchunyang on 16/5/19.
 */
define(function () {
    /**
     * 数组去重
     * @param arr
     * @returns {array}
     */
    function arrayUnique(arr) {
        if(Array.isArray(arr)) {
            var result = [];
            arr.forEach(function(item) {
                if(result.indexOf(item) === -1) {
                    result.push(item);
                }
            });
            return result;
        } else {
            return arr;
        }
    }

    return arrayUnique;
});