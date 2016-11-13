/**
 * Created by wangchunyang on 16/5/19.
 */
define(function () {
    /**
     * 获取URL参数对象
     * 如果参数没有"="后面的值或没有"="，属性值为undefined
     * @returns {object}
     */
    function urlSearchParams() {
        var search = window.location.search.substring(1),
            obj = {};
        if(search) {
            var arr = search.split("&"),
                length = arr.length;

            while(length) {
                var attr = arr[--length].split("=");
                obj[decodeURIComponent(attr[0])] = !!attr[1] ? decodeURIComponent(attr[1]) : undefined;
            }
        }

        return obj;
    }

    return urlSearchParams;
});