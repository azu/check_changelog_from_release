/**
 * Created by azu on 2014/06/18.
 * LICENSE : MIT
 */
"use strict";
var releaseMeta = document.querySelector(".release-meta");
var githubDOM = require("./github_dom");
const GITHUBDOMAIN = "https://github.com/";
function injectChangelogLink(filePath) {
    var span = document.createElement("span");
    var a = document.createElement("a");
    a.href = GITHUBDOMAIN + githubDOM.getRepo() + "/" + filePath;
    console.log(GITHUBDOMAIN + githubDOM.getRepo() + "/" + filePath);
    a.textContent = "CHANGELOG FILE";
    span.appendChild(a);
    releaseMeta.appendChild(span);
}

module.exports = {
    injectChangelogLink: injectChangelogLink
}