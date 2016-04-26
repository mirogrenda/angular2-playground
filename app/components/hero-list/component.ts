import {Component, Input} from 'angular2/core';
import {HeroModel} from '../../models/hero.model';

@Component({
    selector: 'app-hero-list',
    template: `
    <ul>
        <li *ngFor="#hero of heroes"
            (click)=onSelect(hero)
            [class.selected]="hero === selectedHero"
        >{{hero.id}} | {{hero.name}}</li>
    </ul> 
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
`]
})

export class AppHeroListComponent {
    @Input()
    heroes: HeroModel[];
    
    onSelect(hero: HeroModel) {
        alert("On Select");
    }
}