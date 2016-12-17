/**
 * Created by Gábor on 2016. 11. 20..
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main/main.component';
import { UniversalModule } from 'angular2-universal';

@NgModule({
    imports: [ BrowserModule, UniversalModule ],
    declarations: [ MainComponent ],
    bootstrap: [ MainComponent ]
})
export class MainModule{}