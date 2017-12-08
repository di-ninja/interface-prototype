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

  return (
    /*#__PURE__*/
    function (_InterfacePrototype) {
      (0, _inherits2.default)(_class, _InterfacePrototype);

      function _class() {
        (0, _classCallCheck2.default)(this, _class);
        return (0, _possibleConstructorReturn2.default)(this, (_class.__proto__ || (0, _getPrototypeOf.default)(_class)).apply(this, arguments));
      }

      (0, _createClass2.default)(_class, null, [{
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
      }]);
      return _class;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbnRlcmZhY2UtcHJvdG90eXBlLmpzIl0sIm5hbWVzIjpbIkludGVyZmFjZUNsYXNzIiwiY2xhc3NEZWYiLCJJbnRlcmZhY2VQcm90b3R5cGUiLCJJbnRlcmZhY2UiLCJpbnRlcmZhY2VzIiwiaW5zdGFuY2UiLCJzb21lIiwiaW50ZXJmYWNlRGVmIiwiZ2V0Q2xhc3MiLCJjbGFzc2VzIiwiZm9yRWFjaCIsInB1c2giLCJpbnN0YW5jZU9mIiwiaW50ZXJmYWNlQ2xhc3NlcyIsImltcGxlbWVudENsYXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFhQSxjOzs7QUFDWiwwQkFBWUMsUUFBWixFQUFxQjtBQUFBO0FBQ3BCLFNBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0E7Ozs7K0JBQ1M7QUFDVCxhQUFPLEtBQUtBLFFBQVo7QUFDQTs7Ozs7OztJQUVXQyxrQjs7Ozs7O0FBQ04sU0FBU0MsU0FBVCxHQUFpQztBQUFBLG9DQUFYQyxVQUFXO0FBQVhBLGNBQVc7QUFBQTs7QUFDdkM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDhCQUM2QkMsUUFEN0IsRUFDc0M7QUFDcEMsaUJBQU9ELFdBQVdFLElBQVgsQ0FBaUIsd0JBQWdCO0FBQ3ZDLGdCQUFHQyx3QkFBd0JQLGNBQTNCLEVBQTBDO0FBQ3pDTyw2QkFBZUEsYUFBYUMsUUFBYixFQUFmO0FBQ0EscUJBQU9ILG9CQUFvQkUsWUFBM0I7QUFDQTs7QUFDRCxtQkFBT0EsYUFBYUYsUUFBYixDQUFQO0FBQ0EsV0FOTSxDQUFQO0FBT0E7QUFURjtBQUFBO0FBQUEseUNBVWtDO0FBQUEsNkNBQVJJLE9BQVE7QUFBUkEsbUJBQVE7QUFBQTs7QUFDaENBLGtCQUFRQyxPQUFSLENBQWlCO0FBQUEsbUJBQVlOLFdBQVdPLElBQVgsQ0FBaUIsSUFBSVgsY0FBSixDQUFvQkMsUUFBcEIsQ0FBakIsQ0FBWjtBQUFBLFdBQWpCO0FBQ0E7QUFaRjtBQUFBO0FBQUEsd0NBYXVCO0FBQ3JCLGlCQUFPRyxVQUFQO0FBQ0E7QUFmRjtBQUFBO0FBQUEsTUFBcUJGLGtCQUFyQjtBQUFBO0FBaUJBOztBQUVNLFNBQVNVLFVBQVQsR0FBd0M7QUFBQSxxQ0FBakJDLGdCQUFpQjtBQUFqQkEsb0JBQWlCO0FBQUE7O0FBQzlDLFNBQU8sVUFBQ1osUUFBRCxFQUFZO0FBQ2xCWSxxQkFBaUJILE9BQWpCLENBQTBCLDBCQUFrQjtBQUMzQ1YscUJBQWVjLGNBQWYsQ0FBOEJiLFFBQTlCO0FBQ0EsS0FGRDtBQUdBLFdBQU9BLFFBQVA7QUFDQSxHQUxEO0FBTUE7O2VBQ2NXLFUiLCJmaWxlIjoiaW50ZXJmYWNlLXByb3RvdHlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBJbnRlcmZhY2VDbGFzcyB7XG5cdGNvbnN0cnVjdG9yKGNsYXNzRGVmKXtcblx0XHR0aGlzLmNsYXNzRGVmID0gY2xhc3NEZWY7XG5cdH1cblx0Z2V0Q2xhc3MoKXtcblx0XHRyZXR1cm4gdGhpcy5jbGFzc0RlZjtcblx0fVxufVxuZXhwb3J0IGNsYXNzIEludGVyZmFjZVByb3RvdHlwZXt9XG5leHBvcnQgZnVuY3Rpb24gSW50ZXJmYWNlKC4uLmludGVyZmFjZXMpe1xuXHRyZXR1cm4gY2xhc3MgZXh0ZW5kcyBJbnRlcmZhY2VQcm90b3R5cGUge1xuXHRcdHN0YXRpYyBbU3ltYm9sLmhhc0luc3RhbmNlXShpbnN0YW5jZSl7XG5cdFx0XHRyZXR1cm4gaW50ZXJmYWNlcy5zb21lKCBpbnRlcmZhY2VEZWYgPT4ge1xuXHRcdFx0XHRpZihpbnRlcmZhY2VEZWYgaW5zdGFuY2VvZiBJbnRlcmZhY2VDbGFzcyl7XG5cdFx0XHRcdFx0aW50ZXJmYWNlRGVmID0gaW50ZXJmYWNlRGVmLmdldENsYXNzKCk7XG5cdFx0XHRcdFx0cmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgaW50ZXJmYWNlRGVmO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBpbnRlcmZhY2VEZWYoaW5zdGFuY2UpO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0XHRzdGF0aWMgaW1wbGVtZW50Q2xhc3MoLi4uY2xhc3Nlcyl7XG5cdFx0XHRjbGFzc2VzLmZvckVhY2goIGNsYXNzRGVmID0+IGludGVyZmFjZXMucHVzaCggbmV3IEludGVyZmFjZUNsYXNzKCBjbGFzc0RlZiApICkgKTtcblx0XHR9XG5cdFx0c3RhdGljIGdldEludGVyZmFjZXMoKXtcblx0XHRcdHJldHVybiBpbnRlcmZhY2VzO1xuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbmNlT2YoLi4uaW50ZXJmYWNlQ2xhc3Nlcyl7XG5cdHJldHVybiAoY2xhc3NEZWYpPT57XG5cdFx0aW50ZXJmYWNlQ2xhc3Nlcy5mb3JFYWNoKCBJbnRlcmZhY2VDbGFzcyA9PiB7XG5cdFx0XHRJbnRlcmZhY2VDbGFzcy5pbXBsZW1lbnRDbGFzcyhjbGFzc0RlZilcblx0XHR9KTtcblx0XHRyZXR1cm4gY2xhc3NEZWY7XG5cdH07XG59XG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZU9mO1xuIl19