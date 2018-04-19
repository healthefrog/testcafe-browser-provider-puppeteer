'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _puppeteer = require('puppeteer');

var _puppeteer2 = _interopRequireDefault(_puppeteer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var settings = {
    lang: 'en-GB'
};

exports.default = {
    // Multiple browsers support
    isMultiBrowser: true,

    browser: null,

    openedPages: {},

    setLang: function setLang(lang) {
        settings.lang = lang;
        console.log('Puppeteer language is set to \'' + settings.lang + '\'');
    },


    // Required - must be implemented
    // Browser control
    openBrowser: function openBrowser(id, pageUrl, browserName) {
        var _this = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var puppeteerArgs, page;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (_this.browser) {
                                _context.next = 6;
                                break;
                            }

                            puppeteerArgs = ['--lang=' + settings.lang];


                            if (browserName.includes("no_sandbox")) {
                                console.log('Using puppeteer without sandbox! Language = ' + settings.lang);
                                console.log('');
                                puppeteerArgs = ['--no-sandbox', '--disable-setuid-sandbox', '--remote-debugging-port=9222', '--lang=' + settings.lang];
                            }
                            _context.next = 5;
                            return _puppeteer2.default.launch({
                                timeout: 10000,
                                args: puppeteerArgs
                            });

                        case 5:
                            _this.browser = _context.sent;

                        case 6:
                            _context.next = 8;
                            return _this.browser.newPage();

                        case 8:
                            page = _context.sent;
                            _context.next = 11;
                            return page.goto(pageUrl);

                        case 11:
                            _this.openedPages[id] = page;

                        case 12:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }))();
    },
    closeBrowser: function closeBrowser(id) {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var page;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            page = _this2.openedPages[id];


                            delete _this2.openedPages[id];
                            _context2.next = 4;
                            return page.close();

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        }))();
    },
    isValidBrowserName: function isValidBrowserName() {
        var _this3 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            return _context3.abrupt('return', true);

                        case 1:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, _this3);
        }))();
    },


    // Extra methods
    resizeWindow: function resizeWindow(id, width, height) {
        var _this4 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return _this4.openedPages[id].setViewport({ width: width, height: height });

                        case 2:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, _this4);
        }))();
    },
    takeScreenshot: function takeScreenshot(id, screenshotPath) {
        var _this5 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return _this5.openedPages[id].screenshot({ path: screenshotPath });

                        case 2:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, _this5);
        }))();
    }
};
module.exports = exports['default'];