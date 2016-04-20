import {Component} from 'angular2/core';
import {HeroModel} from './models/hero.model';
import {AppHeroDetailComponent} from './components/hero-detail/component';

var HEROES: HeroModel[] = [
        { "id": 11, "name": "Mr. Nice" },
        { "id": 12, "name": "Narco" },
        { "id": 13, "name": "Bombasto" },
        { "id": 14, "name": "Celeritas" },
        { "id": 15, "name": "Magneta" },
        { "id": 16, "name": "RubberMan" },
        { "id": 17, "name": "Dynama" },
        { "id": 18, "name": "Dr IQ" },
        { "id": 19, "name": "Magma" },
        { "id": 20, "name": "Tornado" }
    ];

@Component({
    
    selector: 'app-main',
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
    directives: [AppHeroDetailComponent]
})

export class AppComponent {
    public heroes = HEROES;
    selectedHero: HeroModel;
    
    onSelect(hero: HeroModel) {
        this.selectedHero = hero;
    }
};