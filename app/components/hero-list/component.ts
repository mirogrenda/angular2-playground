import {Component, Input} from 'angular2/core';
import {HeroModel} from '../../models/hero.model';
import {HeroService} from '../../services/hero.service';
import {AppHeroDetailComponent} from '../hero-detail/component';

@Component({
    selector: 'app-hero-list',
    template: `
        <h4>All Heroes</h4>
        <ul>
            <li *ngFor="#hero of heroes"
                (click)=onSelect(hero)
                [class.selected]="hero === selectedHero"
            >{{hero.id}} | {{hero.name}}</li>
        </ul>
        <hr />        
        <app-hero-detail [hero]="selectedHero"></app-hero-detail>
    `,
    styles: [`
        ul {
            margin: 0;
            padding: 0;
        }

        li {
            list-style: none;
            margin: 0;
            padding:0.5rem;
            cursor:pointer;
        }

        li:hover {
            background-color: rgba(222,222,255,0.8);
        }

        li.selected {
            background-color: rgba(255,222,222,0.8);
        }
    `],
    directives: [AppHeroDetailComponent],
    providers: [HeroService]
})

export class AppHeroListComponent {
    heroes: HeroModel[];
    selectedHero: HeroModel;
    
    constructor(private _heroService: HeroService) {        
    }
    
    public ngOnInit() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes); 
    }
        
    onSelect(hero: HeroModel) {
        this.selectedHero = hero;
    }
}