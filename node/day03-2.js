/**
 * Created by Administrator on 2018/9/17.
 */

var server = require("./server");
var router = require("./router");

server.start(router.route);