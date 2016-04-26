import {Component} from 'angular2/core';

@Component({
    selector: 'app-button',
    template: `
        <button class="button"><ng-content></ng-content></button>
    `,
    styles: [`
        button {
            border: 2px solid lightblue;
        }
    `]
})

export class AppButton {    
}