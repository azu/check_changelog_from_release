/**
 * Created by azu on 2014/06/18.
 * LICENSE : MIT
 */
"use strict";
var commandBar = document.getElementById("js-command-bar-field");
function getOwner() {
    return commandBar.dataset.repo.split("/").shift()
}
function getTagName() {
    return location.pathname.split("/").pop();
}
function getRepoName() {
    return commandBar.dataset.repo.split("/").pop();
}
function getRepo() {
    return commandBar.dataset.repo;
}
function getBranch() {
    return commandBar.dataset.branch;
}
module.exports = {
    getRepoName: getRepoName,
    getTagName: getTagName,
    getOwner: getOwner,
    getRepo: getRepo,
    getBranch: getBranch
};