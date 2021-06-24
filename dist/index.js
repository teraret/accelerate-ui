"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DataGrid = require("./component/DataGrid");

Object.keys(_DataGrid).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DataGrid[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _DataGrid[key];
    }
  });
});