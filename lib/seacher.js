/**
 * Created by azu on 2014/06/18.
 * LICENSE : MIT
 */
"use strict";
var find = require("lodash.find");
function findChangeLogInTrees(trees) {
    if (typeof trees !== "object") {
        throw new Error("trees is not object");
    }
    var tree = trees["tree"];
    var result = find(tree, function (object) {
        return /(^changelog|^history)/i.test(object.path);
    });
    return result;
}
module.exports = {
    findChangeLogInTrees: findChangeLogInTrees
};