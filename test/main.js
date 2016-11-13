/**
 * Created by wangchunyang on 2016/11/13.
 */

require.config({
    baseUrl: "../src",
    urlArgs: "_=" + Date.now()
});

require(["require", "array-unique", "object-to-url", "tpl-replace", "url-search-params"], function (req) {
    var arrayUnique = req("array-unique"),
        objectToUrl = req("object-to-url"),
        tplReplace = req("tpl-replace"),
        urlSearchParams = req("url-search-params");



    return {};
});