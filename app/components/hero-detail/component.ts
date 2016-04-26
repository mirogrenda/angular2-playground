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
    styles: [``]
})

export class AppHeroDetailComponent {
    @Input()
    hero: HeroModel;
}