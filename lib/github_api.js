/**
 * Created by azu on 2014/06/18.
 * LICENSE : MIT
 */
"use strict";
// http://developer.github.com/v3/git/trees/
// GET /repos/:owner/:repo/git/trees/:sha
function getTree(repoObject, callback) {
    var owner = repoObject.owner,
        repoName = repoObject.name,
        sha = repoObject.tagName;
    var treeAPI = "https://api.github.com/repos/" + owner + "/" + repoName + "/git/trees/" + sha;
    GM_xmlhttpRequest({
        method: "GET",
        url: treeAPI,
        onload: function (res) {
            if (res.status === 201 || res.status == 200) {
                callback(null, res.responseText);
            } else {
                callback(new Error(res.statusText));
            }
        },
        onerror: function (res) {
            callback(res);
        }
    });
}

function getFileRawContent(url, callback) {
    // http://swanson.github.com/blog/2011/07/09/digging-around-the-github-v3-api.html
    GM_xmlhttpRequest({
        method: "GET",
        url: url,
        headers: {"Accept": "application/vnd.github-blob.raw"},
        onload: function (res) {
            callback(null, res.responseText);
        },
        onerror: function (res) {
            callback(res);
        }
    });
}
module.exports = {
    getTree: getTree,
    getFileRawContent: getFileRawContent
};