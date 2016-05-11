"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var Main = (function () {
    function Main() {
    }
    Main = __decorate([
        core_1.Component({
            selector: "app",
            template: "\n           TEST      \n    "
        })
    ], Main);
    return Main;
}());
exports.Main = Main;
platform_browser_dynamic_1.bootstrap(Main, []).then().then(function (success) { return console.debug("test started correctly!"); }, function (error) { return console.error(error); });
