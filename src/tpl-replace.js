/**
 * Created by wangchunyang on 16/5/19.
 */
define(function () {
    /**
     * 模板替换，占位符{{*}}替换为参数data对应属性值
     * 如果值为undefined|null替换为""
     * @param template {string}
     * @param data {object}
     * @returns {string}
     */
    function tplReplace(template, data) {
        return template.replace(/\{\{([\w\.]*)}}/g, function(str, key) {
            var keys = key.split("."),
                v = data[keys.shift()];
            for (var i = 0, l = keys.length; i < l; i++) {
                try {
                    v = v[keys[i]];
                } catch (e) {}
            }
            return (typeof v !== "undefined" && v !== null) ? v : "";
        });
    }

    return tplReplace;
});