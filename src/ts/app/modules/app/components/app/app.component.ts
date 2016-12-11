/**
 * Created by Gábor on 2016. 12. 11..
 */

import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `<h1>Hello, {{name}}!</h1>`
})
export class AppComponent{
    name = 'Angular2';
}