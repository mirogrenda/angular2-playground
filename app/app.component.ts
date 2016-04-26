import {Component, OnInit} from 'angular2/core';
import {HeroModel} from './models/hero.model';
import {HeroService} from './services/hero.service';
import {AppHeroListComponent} from './components/hero-list/component';
import {AppHeroDetailComponent} from './components/hero-detail/component';
import {AppButton} from './components/button/component';

@Component({    
    selector: 'app-main',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [AppHeroListComponent, AppHeroDetailComponent, AppButton],
    providers: [HeroService]
})

export class AppComponent implements OnInit {    
    allHeroes: HeroModel[];
    selectedHero: HeroModel;
    
    constructor(private _heroService: HeroService) {        
    }
    
    public ngOnInit() {
        this._heroService.getHeroes().then(heroes => this.allHeroes = heroes); 
    }
        
    onSelect(hero: HeroModel) {
        this.selectedHero = hero;
    }
};