import {Component} from 'angular2/core';

@Component({
    selector: 'app-button',
    template: `
        <button class="button" (click)=onClick()><ng-content></ng-content></button>
    `,
    styles: [`
        button {
            border: 2px solid lightblue;
        }
    `]
})

export class AppButton {  
    onClick() {
        alert("Hello from button");
    }  
}