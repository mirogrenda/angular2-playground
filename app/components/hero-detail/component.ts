import {Component, Input} from 'angular2/core';
import {HeroModel} from '../../models/hero.model';

@Component({
    selector: 'app-hero-detail',
    template: `
        <div *ngIf="hero">
            <h4>Hero detail</h4>
            <p>{{hero.id}} | <input type="text" [(ngModel)]="hero.name" placeholder="name"/></p>
            <hr />
        </div>
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
            background-color: rgba(200,200,255,0.8);
        }
        
        li.selected {
            background-color: rgba(255,200,200,0.8);
        }
    `]
})

export class AppHeroDetailComponent {
    @Input()
    hero: HeroModel;
}