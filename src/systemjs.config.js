(function (global) {
    // map tells the System loader where to look for things
    var map = {
        "@angular": "../node_modules/@angular",
        //Not work build
        "rxjs": "../node_modules/rxjs"
        //Work build
        //"rxjs": "https://unpkg.com/rxjs@5.0.0-beta.6"
    };
    
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        "app": { defaultExtension: "js" },
        "@angular/core": { main: "core.umd.js", defaultExtension: "js" },
        "@angular/compiler": { main: "compiler.umd.js", defaultExtension: "js" },
        "@angular/common": { main: "common.umd.js", defaultExtension: "js" },
        "@angular/platform-browser-dynamic": { main: "platform-browser-dynamic.umd.js", defaultExtension: "js" },
        "@angular/platform-browser": { main: "platform-browser.umd.js", defaultExtension: "js" },
        "rxjs": {  defaultExtension: "js" }
    };
    var config = {
        map: map,
        packages: packages,
        baseURL: "."
    };
    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) {
        global.filterSystemConfig(config);
    }
    
    System.config(config);
})(this);