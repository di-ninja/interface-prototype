"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Interface = Interface;
exports.instanceOf = instanceOf;
exports.default = exports.InterfacePrototype = exports.InterfaceClass = void 0;

var _hasInstance = _interopRequireDefault(require("babel-runtime/core-js/symbol/has-instance"));

var _getPrototypeOf = _interopRequireDefault(require("babel-runtime/core-js/object/get-prototype-of"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("babel-runtime/helpers/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("babel-runtime/helpers/inherits"));

var _symbol = _interopRequireDefault(require("babel-runtime/core-js/symbol"));

var _typeof2 = _interopRequireDefault(require("babel-runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("babel-runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("babel-runtime/helpers/createClass"));

var InterfaceClass =
/*#__PURE__*/
function () {
  function InterfaceClass(classDef) {
    (0, _classCallCheck2.default)(this, InterfaceClass);
    this.classDef = classDef;
  }

  (0, _createClass2.default)(InterfaceClass, [{
    key: "getClass",
    value: function getClass() {
      return this.classDef;
    }
  }]);
  return InterfaceClass;
}();

exports.InterfaceClass = InterfaceClass;

var InterfacePrototype = function InterfacePrototype() {
  (0, _classCallCheck2.default)(this, InterfacePrototype);
};

exports.InterfacePrototype = InterfacePrototype;

function Interface() {
  for (var _len = arguments.length, interfaces = new Array(_len), _key = 0; _key < _len; _key++) {
    interfaces[_key] = arguments[_key];
  }

  var name;

  if (typeof interfaces[0] === 'string' || (0, _typeof2.default)(interfaces[0]) === 'symbol') {
    name = interfaces.shift();
  } else {
    name = (0, _symbol.default)();
  }

  return (
    /*#__PURE__*/
    function (_InterfacePrototype) {
      (0, _inherits2.default)(InterfaceClassIntance, _InterfacePrototype);

      function InterfaceClassIntance() {
        (0, _classCallCheck2.default)(this, InterfaceClassIntance);
        return (0, _possibleConstructorReturn2.default)(this, (InterfaceClassIntance.__proto__ || (0, _getPrototypeOf.default)(InterfaceClassIntance)).apply(this, arguments));
      }

      (0, _createClass2.default)(InterfaceClassIntance, null, [{
        key: _hasInstance.default,
        value: function value(instance) {
          return interfaces.some(function (interfaceDef) {
            if (interfaceDef instanceof InterfaceClass) {
              interfaceDef = interfaceDef.getClass();
              return instance instanceof interfaceDef;
            }

            return interfaceDef(instance);
          });
        }
      }, {
        key: "implementClass",
        value: function implementClass() {
          for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            classes[_key2] = arguments[_key2];
          }

          classes.forEach(function (classDef) {
            return interfaces.push(new InterfaceClass(classDef));
          });
        }
      }, {
        key: "getInterfaces",
        value: function getInterfaces() {
          return interfaces;
        }
      }, {
        key: "getName",
        value: function getName() {
          return name;
        }
      }, {
        key: "setName",
        value: function setName(v) {
          name = v;
        }
      }, {
        key: "toString",
        value: function toString() {
          return name;
        }
      }]);
      return InterfaceClassIntance;
    }(InterfacePrototype)
  );
}

function instanceOf() {
  for (var _len3 = arguments.length, interfaceClasses = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    interfaceClasses[_key3] = arguments[_key3];
  }

  return function (classDef) {
    interfaceClasses.forEach(function (InterfaceClass) {
      InterfaceClass.implementClass(classDef);
    });
    return classDef;
  };
}

var _default = instanceOf;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbnRlcmZhY2UtcHJvdG90eXBlLmpzIl0sIm5hbWVzIjpbIkludGVyZmFjZUNsYXNzIiwiY2xhc3NEZWYiLCJJbnRlcmZhY2VQcm90b3R5cGUiLCJJbnRlcmZhY2UiLCJpbnRlcmZhY2VzIiwibmFtZSIsInNoaWZ0IiwiaW5zdGFuY2UiLCJzb21lIiwiaW50ZXJmYWNlRGVmIiwiZ2V0Q2xhc3MiLCJjbGFzc2VzIiwiZm9yRWFjaCIsInB1c2giLCJ2IiwiaW5zdGFuY2VPZiIsImludGVyZmFjZUNsYXNzZXMiLCJpbXBsZW1lbnRDbGFzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQWFBLGM7OztBQUNaLDBCQUFZQyxRQUFaLEVBQXFCO0FBQUE7QUFDcEIsU0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQTs7OzsrQkFDUztBQUNULGFBQU8sS0FBS0EsUUFBWjtBQUNBOzs7Ozs7O0lBRVdDLGtCOzs7Ozs7QUFDTixTQUFTQyxTQUFULEdBQWlDO0FBQUEsb0NBQVhDLFVBQVc7QUFBWEEsY0FBVztBQUFBOztBQUN2QyxNQUFJQyxJQUFKOztBQUNBLE1BQUcsT0FBT0QsV0FBVyxDQUFYLENBQVAsS0FBeUIsUUFBekIsSUFBcUMsc0JBQU9BLFdBQVcsQ0FBWCxDQUFQLE1BQXlCLFFBQWpFLEVBQTBFO0FBQ3pFQyxXQUFPRCxXQUFXRSxLQUFYLEVBQVA7QUFDQSxHQUZELE1BR0k7QUFDSEQsV0FBTyxzQkFBUDtBQUNBOztBQUNEO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSw4QkFDNkJFLFFBRDdCLEVBQ3NDO0FBQ3BDLGlCQUFPSCxXQUFXSSxJQUFYLENBQWlCLHdCQUFnQjtBQUN2QyxnQkFBR0Msd0JBQXdCVCxjQUEzQixFQUEwQztBQUN6Q1MsNkJBQWVBLGFBQWFDLFFBQWIsRUFBZjtBQUNBLHFCQUFPSCxvQkFBb0JFLFlBQTNCO0FBQ0E7O0FBQ0QsbUJBQU9BLGFBQWFGLFFBQWIsQ0FBUDtBQUNBLFdBTk0sQ0FBUDtBQU9BO0FBVEY7QUFBQTtBQUFBLHlDQVVrQztBQUFBLDZDQUFSSSxPQUFRO0FBQVJBLG1CQUFRO0FBQUE7O0FBQ2hDQSxrQkFBUUMsT0FBUixDQUFpQjtBQUFBLG1CQUFZUixXQUFXUyxJQUFYLENBQWlCLElBQUliLGNBQUosQ0FBb0JDLFFBQXBCLENBQWpCLENBQVo7QUFBQSxXQUFqQjtBQUNBO0FBWkY7QUFBQTtBQUFBLHdDQWF1QjtBQUNyQixpQkFBT0csVUFBUDtBQUNBO0FBZkY7QUFBQTtBQUFBLGtDQWdCaUI7QUFDZixpQkFBT0MsSUFBUDtBQUNBO0FBbEJGO0FBQUE7QUFBQSxnQ0FtQmdCUyxDQW5CaEIsRUFtQmtCO0FBQ2hCVCxpQkFBT1MsQ0FBUDtBQUNBO0FBckJGO0FBQUE7QUFBQSxtQ0FzQmtCO0FBQ2hCLGlCQUFPVCxJQUFQO0FBQ0E7QUF4QkY7QUFBQTtBQUFBLE1BQTJDSCxrQkFBM0M7QUFBQTtBQTBCQTs7QUFFTSxTQUFTYSxVQUFULEdBQXdDO0FBQUEscUNBQWpCQyxnQkFBaUI7QUFBakJBLG9CQUFpQjtBQUFBOztBQUM5QyxTQUFPLFVBQUNmLFFBQUQsRUFBWTtBQUNsQmUscUJBQWlCSixPQUFqQixDQUEwQiwwQkFBa0I7QUFDM0NaLHFCQUFlaUIsY0FBZixDQUE4QmhCLFFBQTlCO0FBQ0EsS0FGRDtBQUdBLFdBQU9BLFFBQVA7QUFDQSxHQUxEO0FBTUE7O2VBQ2NjLFUiLCJmaWxlIjoiaW50ZXJmYWNlLXByb3RvdHlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBJbnRlcmZhY2VDbGFzcyB7XG5cdGNvbnN0cnVjdG9yKGNsYXNzRGVmKXtcblx0XHR0aGlzLmNsYXNzRGVmID0gY2xhc3NEZWY7XG5cdH1cblx0Z2V0Q2xhc3MoKXtcblx0XHRyZXR1cm4gdGhpcy5jbGFzc0RlZjtcblx0fVxufVxuZXhwb3J0IGNsYXNzIEludGVyZmFjZVByb3RvdHlwZXt9XG5leHBvcnQgZnVuY3Rpb24gSW50ZXJmYWNlKC4uLmludGVyZmFjZXMpe1xuXHRsZXQgbmFtZTtcblx0aWYodHlwZW9mIGludGVyZmFjZXNbMF0gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBpbnRlcmZhY2VzWzBdID09PSAnc3ltYm9sJyl7XG5cdFx0bmFtZSA9IGludGVyZmFjZXMuc2hpZnQoKTtcblx0fVxuXHRlbHNle1xuXHRcdG5hbWUgPSBTeW1ib2woKTtcblx0fVxuXHRyZXR1cm4gY2xhc3MgSW50ZXJmYWNlQ2xhc3NJbnRhbmNlIGV4dGVuZHMgSW50ZXJmYWNlUHJvdG90eXBlIHtcblx0XHRzdGF0aWMgW1N5bWJvbC5oYXNJbnN0YW5jZV0oaW5zdGFuY2Upe1xuXHRcdFx0cmV0dXJuIGludGVyZmFjZXMuc29tZSggaW50ZXJmYWNlRGVmID0+IHtcblx0XHRcdFx0aWYoaW50ZXJmYWNlRGVmIGluc3RhbmNlb2YgSW50ZXJmYWNlQ2xhc3Mpe1xuXHRcdFx0XHRcdGludGVyZmFjZURlZiA9IGludGVyZmFjZURlZi5nZXRDbGFzcygpO1xuXHRcdFx0XHRcdHJldHVybiBpbnN0YW5jZSBpbnN0YW5jZW9mIGludGVyZmFjZURlZjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gaW50ZXJmYWNlRGVmKGluc3RhbmNlKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdFx0c3RhdGljIGltcGxlbWVudENsYXNzKC4uLmNsYXNzZXMpe1xuXHRcdFx0Y2xhc3Nlcy5mb3JFYWNoKCBjbGFzc0RlZiA9PiBpbnRlcmZhY2VzLnB1c2goIG5ldyBJbnRlcmZhY2VDbGFzcyggY2xhc3NEZWYgKSApICk7XG5cdFx0fVxuXHRcdHN0YXRpYyBnZXRJbnRlcmZhY2VzKCl7XG5cdFx0XHRyZXR1cm4gaW50ZXJmYWNlcztcblx0XHR9XG5cdFx0c3RhdGljIGdldE5hbWUoKXtcblx0XHRcdHJldHVybiBuYW1lO1xuXHRcdH1cblx0XHRzdGF0aWMgc2V0TmFtZSh2KXtcblx0XHRcdG5hbWUgPSB2O1xuXHRcdH1cblx0XHRzdGF0aWMgdG9TdHJpbmcoKXtcblx0XHRcdHJldHVybiBuYW1lO1xuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbmNlT2YoLi4uaW50ZXJmYWNlQ2xhc3Nlcyl7XG5cdHJldHVybiAoY2xhc3NEZWYpPT57XG5cdFx0aW50ZXJmYWNlQ2xhc3Nlcy5mb3JFYWNoKCBJbnRlcmZhY2VDbGFzcyA9PiB7XG5cdFx0XHRJbnRlcmZhY2VDbGFzcy5pbXBsZW1lbnRDbGFzcyhjbGFzc0RlZilcblx0XHR9KTtcblx0XHRyZXR1cm4gY2xhc3NEZWY7XG5cdH07XG59XG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZU9mO1xuIl19