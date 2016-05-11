import {Component, provide} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";

@Component({
    selector: "app",
    template: `
           TEST      
    `
})

export class Main {
    constructor() {
       
    }
}

bootstrap(Main, [
]).then().then(
    success => console.debug("test started correctly!"),
    error => console.error(error)
    );