"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicGridReOrderColumn = exports.BasicGridShowHide = exports.BasicGridPinColumn = exports.BasicGridSorting = exports.BasicGrid = exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));

var _react = _interopRequireDefault(require("react"));

var _DataGrid = _interopRequireDefault(require("./DataGrid"));

var _default = {
  title: 'OTIS-UI/Datagrid',
  component: _DataGrid.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_DataGrid.default, args);
};

var COLUMN_WIDTH = 350;
var BasicColumns = [{
  key: "lastName",
  name: "Last Name",
  width: COLUMN_WIDTH
}, {
  key: "firstName",
  name: "First Name",
  width: COLUMN_WIDTH
}, {
  key: "email",
  name: "E-Mail",
  width: COLUMN_WIDTH
}, {
  key: "mobile",
  name: "Mobile",
  width: COLUMN_WIDTH
}, {
  key: "address",
  name: "Address",
  width: COLUMN_WIDTH
}];
var defaultColumnProperties = {
  sortable: true
};
var SortableColumns = [{
  key: "firstName",
  name: "First Name",
  width: COLUMN_WIDTH
}, {
  key: "lastName",
  name: "Last Name",
  width: COLUMN_WIDTH
}, {
  key: "email",
  name: "E-Mail",
  width: COLUMN_WIDTH
}, {
  key: "mobile",
  name: "Mobile",
  width: COLUMN_WIDTH
}, {
  key: "address",
  name: "Address",
  width: COLUMN_WIDTH
}].map(function (c) {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, c), defaultColumnProperties);
});
var PinColumns = [{
  key: "lastName",
  name: "Last Name",
  frozen: true,
  width: COLUMN_WIDTH
}, {
  key: "firstName",
  name: "First Name",
  width: COLUMN_WIDTH
}, {
  key: "email",
  name: "E-Mail",
  width: COLUMN_WIDTH
}, {
  key: "mobile",
  name: "Mobile",
  width: COLUMN_WIDTH
}, {
  key: "address",
  name: "Address",
  width: COLUMN_WIDTH
}];
var data = [{
  "id": 124,
  "mobile": "1-723-672-3275",
  "address": "Ap #982-7535 Sed Road",
  "firstName": "Abdul",
  "lastName": "George",
  "email": "Pellentesque.habitant.morbi@ipsumSuspendissenon.co.uk"
}, {
  "id": 378,
  "mobile": "1-420-826-9362",
  "address": "Ap #405-4680 Cum Street",
  "firstName": "Abel",
  "lastName": "Sloan",
  "email": "nec@mi.co.uk"
}, {
  "id": 303,
  "mobile": "1-408-811-7043",
  "address": "1475 Tellus Avenue",
  "firstName": "Abra",
  "lastName": "Delgado",
  "email": "aliquet@nibh.com"
}, {
  "id": 259,
  "mobile": "1-788-277-6514",
  "address": "P.O. Box 942, 8779 Malesuada. Rd.",
  "firstName": "Abraham",
  "lastName": "Gardner",
  "email": "Fusce@fermentum.co.uk"
}, {
  "id": 453,
  "mobile": "1-701-756-9861",
  "address": "P.O. Box 542, 1573 Molestie St.",
  "firstName": "Amanda",
  "lastName": "Boyer",
  "email": "molestie@vulputate.co.uk"
}, {
  "id": 358,
  "mobile": "1-299-677-5927",
  "address": "9981 Eros St.",
  "firstName": "Amir",
  "lastName": "Day",
  "email": "fringilla.purus.mauris@Donectempor.edu"
}, {
  "id": 108,
  "mobile": "1-114-966-5325",
  "address": "5490 Ut, Street",
  "firstName": "Anika",
  "lastName": "Tran",
  "email": "elit.elit@nonummyipsum.ca"
}, {
  "id": 270,
  "mobile": "1-782-163-2142",
  "address": "Ap #424-4669 Odio. St.",
  "firstName": "Aphrodite",
  "lastName": "Perez",
  "email": "Vivamus@pulvinar.net"
}, {
  "id": 10,
  "mobile": "1-868-957-0295",
  "address": "4072 Libero. St.",
  "firstName": "Arden",
  "lastName": "Ingram",
  "email": "nibh.vulputate@scelerisque.ca"
}, {
  "id": 4,
  "mobile": "1-547-638-7911",
  "address": "Ap #114-4370 Lacus. St.",
  "firstName": "Aretha",
  "lastName": "Bentley",
  "email": "mi.enim@vehiculaPellentesque.org"
}];
var BasicGrid = Template.bind({});
exports.BasicGrid = BasicGrid;
BasicGrid.args = {
  label: 'Basic Grid',
  columns: BasicColumns,
  data: data
};
var BasicGridSorting = Template.bind({});
exports.BasicGridSorting = BasicGridSorting;
BasicGridSorting.args = {
  label: 'Basic Grid Sorting',
  columns: SortableColumns,
  data: data,
  onGridSort: function onGridSort(sortColumn, sortDirection) {}
};
var BasicGridPinColumn = Template.bind({});
exports.BasicGridPinColumn = BasicGridPinColumn;
BasicGridPinColumn.args = {
  label: 'Basic Grid Pin Column',
  columns: PinColumns,
  data: data
};
var BasicGridShowHide = Template.bind({});
exports.BasicGridShowHide = BasicGridShowHide;
BasicGridShowHide.args = {
  label: 'Basic Grid Show / Hide',
  columns: BasicColumns,
  data: data
};
var BasicGridReOrderColumn = Template.bind({});
exports.BasicGridReOrderColumn = BasicGridReOrderColumn;
BasicGridReOrderColumn.args = {
  label: 'Basic Grid Re-Order Column',
  columns: BasicColumns,
  data: data
};