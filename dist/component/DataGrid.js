"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataGrid;

var _react = _interopRequireDefault(require("react"));

var _reactDataGrid = _interopRequireDefault(require("react-data-grid"));

var _reactDataGridAddons = require("react-data-grid-addons");

var _styles = require("@material-ui/core/styles");

var _require = require("react-data-grid-addons"),
    DraggableContainer = _require.DraggableHeader.DraggableContainer;

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      "& div.react-grid-Container": {
        fontfamily: "Roboto"
      },
      "& div.react-grid-Canvas": {
        backgroundColor: "#000"
      },
      "& div.react-grid-HeaderRow": {
        backgroundColor: "#000",
        color: "white"
      },
      "& div.react-grid-HeaderCell": {
        backgroundColor: "#000",
        // textAlign: 'center',
        //color: "white",
        borderWidth: 2,
        borderColor: 'white',
        borderStyle: 'solid'
      },
      "& div.react-grid-Row": {
        color: "white",
        "&:hover": {
          color: "black"
        }
      },
      "& div.react-grid-Cell": {
        backgroundColor: "#333",
        borderWidth: 2,
        borderColor: 'white',
        borderStyle: 'solid'
      }
    }
  };
});

function DataGrid(props) {
  var _this = this;

  var classes = useStyles();
  var columns = props.columns,
      data = props.data,
      filters = props.filters,
      setFilters = props.setFilters,
      onGridSort = props.onGridSort;

  var onHeaderDrop = function onHeaderDrop(source, target) {
    var columnSourceIndex = _this.state.columns.findIndex(function (i) {
      return i.key === source;
    });

    var columnTargetIndex = _this.state.columns.findIndex(function (i) {
      return i.key === target;
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(DraggableContainer, {
    onHeaderDrop: onHeaderDrop
  }, /*#__PURE__*/_react.default.createElement(_reactDataGrid.default, {
    columns: columns,
    rowGetter: function rowGetter(i) {
      return data[i];
    },
    onColumnResize: function onColumnResize(idx, width) {
      console.log("Column ".concat(idx, " has been resized to ").concat(width));
    },
    onGridSort: onGridSort,
    toolbar: /*#__PURE__*/_react.default.createElement(_reactDataGridAddons.Toolbar, {
      enableFilter: true
    }),
    onAddFilter: function onAddFilter(filter) {
      var filterValues = filters;
      var keyindex = filterValues.findIndex(function (x) {
        return x.key === filter.column.key;
      });

      if (keyindex !== -1) {
        filterValues.splice(keyindex, 1, {
          operation: "contains",
          value: filter.filterTerm,
          key: filter.column.key
        });
      } else {
        filterValues.push({
          operation: "contains",
          value: filter.filterTerm,
          key: filter.column.key
        });
      }

      filterValues = filterValues.filter(function (x) {
        return x.value !== "";
      });
      setFilters(filterValues);
    },
    onClearFilters: function onClearFilters() {
      return setFilters([]);
    },
    rowsCount: 10,
    minHeight: 450
  })));
}