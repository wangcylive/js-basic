/**
 * Created by wangchunyang on 16/5/19.
 */
define(function () {
    /**
     * 对象转为URL参数字符串
     * @param obj {object} 要转换的对象
     * @returns {string}
     */
     function objectToUrl(obj) {
        if(Object.prototype.toString.call(obj) == "[object Object]") {
            var array = [];
            for(var x in obj) {
                if(obj.hasOwnProperty(x) && undefined !== obj[x]) {
                    array.push(encodeURIComponent(x) + "=" + encodeURIComponent(obj[x]));
                }
            }
            return array.join("&");
        } else {
            return "";
        }
    }

    return objectToUrl;
});