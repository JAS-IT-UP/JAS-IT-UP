const list = require("./list");
const create = require("./create");
const find = require("./find");
const deletePost = require("./delete");
const update = require("./update");
const findUserPost = require("./findById");

module.exports = {
    list,
    create,
    find,
    findUserPost,
    deletePost,
    update,
}