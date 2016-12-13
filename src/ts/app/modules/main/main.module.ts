/**
 * Created by Gábor on 2016. 11. 20..
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main/main.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ MainComponent ],
    bootstrap: [ MainComponent ]
})
export class MainModule{}