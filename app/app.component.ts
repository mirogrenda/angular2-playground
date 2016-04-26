import {Component, OnInit} from 'angular2/core';
import {AppHeroListComponent} from './components/hero-list/component';
import {AppButton} from './components/button/component';

@Component({    
    selector: 'app-main',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [AppHeroListComponent, AppButton]
})

export class AppComponent implements OnInit {    
    constructor() {        
    }
    
    public ngOnInit() { 
    }
};