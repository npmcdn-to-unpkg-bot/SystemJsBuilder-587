(function (global) {
    // map tells the System loader where to look for things
    var map = {
        "rxjs": "../node_modules/rxjs",
        "@angular": "../node_modules/@angular"
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        "app": { defaultExtension: "js" },
        "rxjs": { defaultExtension: "js" },
        "@angular/common": { main: "index.js", defaultExtension: "js" },
        "@angular/compiler": { main: "index.js", defaultExtension: "js" },
        "@angular/core": { main: "index.js", defaultExtension: "js" },
        "@angular/http": { main: "index.js", defaultExtension: "js" },
        "@angular/platform-browser": { main: "index.js", defaultExtension: "js" },
        "@angular/platform-browser-dynamic": { main: "index.js", defaultExtension: "js" },
        "@angular/testing": { main: "index.js", defaultExtension: "js" },
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