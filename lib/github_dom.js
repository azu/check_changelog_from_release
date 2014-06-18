/**
 * Created by azu on 2014/06/18.
 * LICENSE : MIT
 */
"use strict";
var commandBar = document.getElementById("js-command-bar-field");
function getOwner() {
    var owner = commandBar.dataset.repo.split("/").shift();
    return owner
}
function getSha() {
    return commandBar.dataset.sha;
}
function getRepoName() {
    var repo = commandBar.dataset.repo.split("/").pop()
    return repo;
}
function getRepo() {
    return commandBar.dataset.repo;
}
function getBranch() {
    return commandBar.dataset.branch;
}
module.exports = {
    getRepoName: getRepoName,
    getSha: getSha,
    getOwner: getOwner,
    getRepo: getRepo,
    getBranch: getBranch
};