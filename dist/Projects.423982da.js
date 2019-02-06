// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"components/ProjectTabs.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var pathname = _ref.location.pathname,
      match = _ref.match;
  return _react.default.createElement("div", {
    className: "container"
  }, _react.default.createElement("div", {
    className: "tabs is-centered is-boxed"
  }, _react.default.createElement("ul", null, _react.default.createElement("li", {
    className: pathname === '/projects/csre-web' ? 'is-active' : ''
  }, _react.default.createElement(_reactRouterDom.NavLink, {
    to: "".concat(match.url, "/csre-web"),
    activeClassName: "is-active"
  }, _react.default.createElement("span", {
    className: "icon"
  }, _react.default.createElement("i", {
    className: "fas fa-laptop"
  })), _react.default.createElement("span", null, "Web"))), _react.default.createElement("li", {
    className: pathname === '/projects/csre-mobile' ? 'is-active' : ''
  }, _react.default.createElement(_reactRouterDom.NavLink, {
    to: "".concat(match.url, "/csre-mobile"),
    activeClassName: "is-active"
  }, _react.default.createElement("span", {
    className: "icon"
  }, _react.default.createElement("i", {
    className: "fas fa-mobile-alt"
  })), _react.default.createElement("span", null, "Mobile"))), _react.default.createElement("li", {
    className: pathname === '/projects/wikipedia' ? 'is-active' : ''
  }, _react.default.createElement(_reactRouterDom.NavLink, {
    to: "".concat(match.url, "/wikipedia"),
    activeClassName: "is-active"
  }, _react.default.createElement("span", {
    className: "icon"
  }, _react.default.createElement("i", {
    className: "fab fa-wikipedia-w"
  })), _react.default.createElement("span", null, "Wikipedia"))), _react.default.createElement("li", {
    className: pathname === '/projects/calculator' ? 'is-active' : ''
  }, _react.default.createElement(_reactRouterDom.NavLink, {
    to: "".concat(match.url, "/calculator"),
    activeClassName: "is-active"
  }, _react.default.createElement("span", {
    className: "icon"
  }, _react.default.createElement("i", {
    className: "fas fa-calculator"
  })), _react.default.createElement("span", null, "Calculator"))), _react.default.createElement("li", {
    className: pathname === '/projects/quotes' ? 'is-active' : ''
  }, _react.default.createElement(_reactRouterDom.NavLink, {
    to: "".concat(match.url, "/quotes"),
    activeClassName: "is-active"
  }, _react.default.createElement("span", {
    className: "icon"
  }, _react.default.createElement("i", {
    className: "fas fa-quote-left"
  })), _react.default.createElement("span", null, "Quotes"))))));
};

exports.default = _default;
},{"react":"../node_modules/react/index.js","react-router-dom":"../node_modules/react-router-dom/es/index.js"}],"../public/img/champions-screenshot.png":[function(require,module,exports) {
module.exports = "/champions-screenshot.756f8b09.png";
},{}],"pages/projects/Web.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _championsScreenshot = _interopRequireDefault(require("../../../public/img/champions-screenshot.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  return _react.default.createElement("div", {
    className: "columns"
  }, _react.default.createElement("div", {
    className: "column"
  }, _react.default.createElement("div", {
    className: "content"
  }, _react.default.createElement("h2", {
    className: "title is-5"
  }, "Champions School of Real Estate Website"), _react.default.createElement("h3", {
    className: "subtitle is-6"
  }, "Professional Project"), _react.default.createElement("p", null, "The Champions School of Real Estate website redesign was completed in early 2018 and was a result of years of hard work by a team of developers, designers and stakeholders. I was able to make contributions to the site in the form of backend PHP and frontend Javascript features that led to improvements for customers and developers."), _react.default.createElement("p", null, "Contributions Included"), _react.default.createElement("ul", null, _react.default.createElement("li", null, "Developed custom functionality for the main menu."), _react.default.createElement("li", null, "Developed a feature to organize course and state data structures and operations to ease development of purchase accordions throughout the site."), _react.default.createElement("li", null, "Developed functionality of the course accordions."), _react.default.createElement("li", null, "Created Broker Requirements feature for real estate agents to calculate their remaining requirements for obtaining a broker's license in Texas"), _react.default.createElement("li", null, "Created a Reviews Page using social media APIs to display customer reviews."), _react.default.createElement("li", null, "Developed contact forms with Captcha and email service."), _react.default.createElement("li", null, "Developed a feature allowing real estate agents to check their continuing education requirements with the Texas Real Estate Commission")))), _react.default.createElement("div", {
    className: "column"
  }, _react.default.createElement("figure", {
    className: "image"
  }, _react.default.createElement("img", {
    src: _championsScreenshot.default,
    style: {
      width: '400px',
      margin: 'auto'
    },
    alt: ""
  }))));
};

exports.default = _default;
},{"react":"../node_modules/react/index.js","../../../public/img/champions-screenshot.png":"../public/img/champions-screenshot.png"}],"../public/img/iphone-card.png":[function(require,module,exports) {
module.exports = "/iphone-card.6feb1964.png";
},{}],"pages/projects/Mobile.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _iphoneCard = _interopRequireDefault(require("../../../public/img/iphone-card.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  return _react.default.createElement("div", {
    className: "columns"
  }, _react.default.createElement("div", {
    className: "column"
  }, _react.default.createElement("div", {
    className: "content"
  }, _react.default.createElement("h2", {
    className: "title is-5"
  }, "Real Estate Exam Flashcard Study App"), _react.default.createElement("h3", {
    className: "subtitle is-6"
  }, "Professional Project"), _react.default.createElement("p", null, "The Champions School of Real Estate website redesign was completed in early 2018 and was a result of years of hard work by a team of developers, designers and stakeholders. I was able to make contributions to the site in the form of backend PHP and frontend Javascript features that led to improvements for customers and developers."), _react.default.createElement("p", null, "Contributions Included"), _react.default.createElement("ul", null, _react.default.createElement("li", null, "Developed custom functionality for the main menu."), _react.default.createElement("li", null, "Developed a feature to organize course and state data structures and operations to ease development of purchase accordions throughout the site."), _react.default.createElement("li", null, "Developed functionality of the course accordions."), _react.default.createElement("li", null, "Created Broker Requirements feature for real estate agents to calculate their remaining requirements for obtaining a broker\\'s license in Texas"), _react.default.createElement("li", null, "Created a Reviews Page using social media APIs to display customer reviews."), _react.default.createElement("li", null, "Developed contact forms with Captcha and email service."), _react.default.createElement("li", null, "Developed a feature allowing real estate agents to check their continuing education requirements with the Texas Real Estate Commission")))), _react.default.createElement("div", {
    className: "column"
  }, _react.default.createElement("figure", {
    className: "image"
  }, _react.default.createElement("img", {
    src: _iphoneCard.default,
    style: {
      width: '300px',
      margin: 'auto'
    },
    alt: ""
  }))));
};

exports.default = _default;
},{"react":"../node_modules/react/index.js","../../../public/img/iphone-card.png":"../public/img/iphone-card.png"}],"components/Project.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iframeSrcMap = {
  wikipedia: 'https://codesandbox.io/embed/oj92xr39pq?view=preview',
  calculator: 'https://codesandbox.io/embed/xox8ynzkmo?view=preview',
  quotes: 'https://codesandbox.io/embed/xl1yy0wz2q?view=preview'
};

var _default = function _default(_ref) {
  var projectTitle = _ref.projectTitle;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "columns"
  }, _react.default.createElement("div", {
    className: "column"
  }, _react.default.createElement("iframe", {
    title: "Projects",
    src: iframeSrcMap[projectTitle],
    style: {
      width: '100%',
      height: '600px',
      border: '0',
      borderRadius: '4px',
      overflow: 'hidden'
    },
    sandbox: "allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
  }))));
};

exports.default = _default;
},{"react":"../node_modules/react/index.js"}],"pages/Projects.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _ProjectTabs = _interopRequireDefault(require("../components/ProjectTabs"));

var _Web = _interopRequireDefault(require("./projects/Web"));

var _Mobile = _interopRequireDefault(require("./projects/Mobile"));

var _Project = _interopRequireDefault(require("../components/Project"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var location = _ref.location,
      match = _ref.match;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ProjectTabs.default, {
    match: match,
    location: location
  }), _react.default.createElement("section", {
    className: "section"
  }, _react.default.createElement("div", {
    className: "container"
  }, _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
    path: "".concat(match.path, "/csre-web"),
    component: _Web.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "".concat(match.path, "/csre-mobile"),
    component: _Mobile.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "".concat(match.path, "/wikipedia"),
    render: function render() {
      return _react.default.createElement(_Project.default, {
        projectTitle: "wikipedia"
      });
    }
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "".concat(match.path, "/calculator"),
    render: function render() {
      return _react.default.createElement(_Project.default, {
        projectTitle: "calculator"
      });
    }
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "".concat(match.path, "/quotes"),
    render: function render() {
      return _react.default.createElement(_Project.default, {
        projectTitle: "quotes"
      });
    }
  }), _react.default.createElement(_reactRouterDom.Redirect, {
    from: "".concat(match.path, "/"),
    to: "".concat(match.path, "/csre-web")
  })))));
};

exports.default = _default;
},{"react":"../node_modules/react/index.js","react-router-dom":"../node_modules/react-router-dom/es/index.js","../components/ProjectTabs":"components/ProjectTabs.jsx","./projects/Web":"pages/projects/Web.jsx","./projects/Mobile":"pages/projects/Mobile.jsx","../components/Project":"components/Project.jsx"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61814" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/Projects.423982da.map