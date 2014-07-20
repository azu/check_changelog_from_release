// ==UserScript==
// @name        CheckChangelogFromGithubRelease
// @namespace   http://efcl.info/
// @description Check ChangeLog from Github Relase page.
// @license     MIT
// @include     https://github.com/*/*/releases/tag/*
// @version     1.2.1
// @grant       GM_xmlhttpRequest
// ==/UserScript==
"use strict";
var githubAPI = require("./lib/github_api");
var searcher = require("./lib/seacher");
var injector = require("./lib/injector");
var ghObject = require("github-release-dom")(location.href);
var treePromise = new Promise(function (resolve, reject) {
    githubAPI.getTree(ghObject, function (error, res) {
        if (error) {
            reject(error);
        } else {
            resolve(res);
        }
    })
});

treePromise.then(JSON.parse)
    .then(searcher.findChangeLogInTrees)
    .then(function (result) {
        if (!result) {
            return Promise.reject(new Error("Not found CHANGELOG in Repogitory."));
        }
        injector.injectChangelogLink(result.path);
    })
    .catch(function (error) {
        console.error(error);
    });

