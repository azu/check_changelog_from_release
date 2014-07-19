/**
 * Created by azu on 2014/06/18.
 * LICENSE : MIT
 */
"use strict";
var releaseMeta = document.querySelector(".release-meta");
var tagRef = document.querySelector(".tag-references");
var githubDOM = require("./github_dom");
const GITHUBDOMAIN = "https://github.com/";
function injectChangelogLink(filePath) {
    var span = document.createElement("span");
    var a = document.createElement("a");
    a.href = GITHUBDOMAIN + githubDOM.getRepo() + "/blob/" + githubDOM.getTagName() + "/" + filePath;
    a.textContent = "CHANGELOG FILE";
    span.appendChild(a);
    if (tagRef.nextSibling === null) {
        tagRef.parentNode.appendChild(span); // 末尾に追加
    } else {
        tagRef.parentNode.insertBefore(span, tagRef.nextSibling); // 基準ノードの後ろに追加
    }
}

module.exports = {
    injectChangelogLink: injectChangelogLink
};