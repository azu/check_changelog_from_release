// ==UserScript==
// @name        CheckChangelogFromGithubRelease
// @namespace   http://efcl.info/
// @description Check ChangeLog
// @license     MIT
// @include     https://github.com/*/*/releases/tag/*
// @version     1
// ==/UserScript==
"use strict";
var githubAPI = require("./lib/github_api");
var githubDOM = require("./lib/github_dom");
var searcher = require("./lib/seacher");
var injector = require("./lib/injector");
var treePromise = new Promise(function (resolve, reject) {
    githubAPI.getTree({
        "owner": githubDOM.getOwner(),
        "name": githubDOM.getRepoName(),
        "sha": githubDOM.getSha()
    }, function (error, res) {
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
            return Promsie.reject(new Error("Not found CHANGELOG in Repogitory."));
        }
        injector.injectChangelogLink(result.path);
    })
    .catch(function (error) {
        console.error(error);
    });

