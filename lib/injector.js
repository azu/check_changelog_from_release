/**
 * Created by azu on 2014/06/18.
 * LICENSE : MIT
 */
"use strict";
var tagRef = document.querySelector(".tag-references");
const GITHUBDOMAIN = "https://github.com/";
function injectChangelogLink(ghObject, filePath) {
    var span = document.createElement("span");
    var a = document.createElement("a");
    a.href = GITHUBDOMAIN + ghObject.user + "/" + ghObject.repo + "/blob/" + ghObject.tagName + "/" + filePath;
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