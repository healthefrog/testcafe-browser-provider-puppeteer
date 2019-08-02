"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _puppeteer = _interopRequireDefault(require("puppeteer"));

var settings = {
  lang: 'en-GB'
};
var _default = {
  // Multiple browsers support
  isMultiBrowser: true,
  browser: null,
  openedPages: {},
  setLang: function setLang(lang) {
    settings.lang = lang;
    console.log("Puppeteer language is set to '".concat(settings.lang, "'"));
  },
  // Required - must be implemented
  // Browser control
  openBrowser: function () {
    var _openBrowser = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(id, pageUrl, browserName) {
      var launchArgs, noSandboxArgs, userArgs, params, executablePath, page;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (this.browser) {
                _context.next = 7;
                break;
              }

              launchArgs = {
                timeout: 10000,
                args: ["--lang=".concat(settings.lang)]
              };
              noSandboxArgs = ['--no-sandbox', '--disable-setuid-sandbox', '--remote-debugging-port=9222', "--lang=".concat(settings.lang)];
              if (browserName === 'no_sandbox') launchArgs.args = noSandboxArgs;else if (browserName.indexOf('?') !== -1) {
                userArgs = browserName.split('?');
                params = userArgs[0];
                if (params === 'no_sandbox') launchArgs.args = noSandboxArgs;
                executablePath = userArgs[1];
                if (executablePath.length > 0) launchArgs.executablePath = executablePath;
              }
              _context.next = 6;
              return _puppeteer.default.launch(launchArgs);

            case 6:
              this.browser = _context.sent;

            case 7:
              _context.next = 9;
              return this.browser.newPage();

            case 9:
              page = _context.sent;
              _context.next = 12;
              return page.goto(pageUrl);

            case 12:
              this.openedPages[id] = page;

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function openBrowser(_x, _x2, _x3) {
      return _openBrowser.apply(this, arguments);
    }

    return openBrowser;
  }(),
  closeBrowser: function () {
    var _closeBrowser = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(id) {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              delete this.openedPages[id];
              _context2.next = 3;
              return this.browser.close();

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function closeBrowser(_x4) {
      return _closeBrowser.apply(this, arguments);
    }

    return closeBrowser;
  }(),
  isValidBrowserName: function () {
    var _isValidBrowserName = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3() {
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", true);

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function isValidBrowserName() {
      return _isValidBrowserName.apply(this, arguments);
    }

    return isValidBrowserName;
  }(),
  // Extra methods
  resizeWindow: function () {
    var _resizeWindow = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(id, width, height) {
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.openedPages[id].setViewport({
                width: width,
                height: height
              });

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function resizeWindow(_x5, _x6, _x7) {
      return _resizeWindow.apply(this, arguments);
    }

    return resizeWindow;
  }(),
  takeScreenshot: function () {
    var _takeScreenshot = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5(id, screenshotPath) {
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.openedPages[id].screenshot({
                path: screenshotPath
              });

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function takeScreenshot(_x8, _x9) {
      return _takeScreenshot.apply(this, arguments);
    }

    return takeScreenshot;
  }()
};
exports.default = _default;
module.exports = exports.default;